"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-rbac/models/subject/sdk/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Button } from "@sps/shared-ui-shadcn";
import { FormField } from "@sps/ui-adapter";
import { toast } from "sonner";
import Cookie from "js-cookie";
import { useAccount } from "wagmi";
import { disconnect, signMessage } from "@wagmi/core";
import { ethereumVirtualMachine } from "@sps/shared-frontend-client-web3";

const formSchema = z.object({
  message: z.string().min(8),
});

export function Component(props: IComponentPropsExtended) {
  const ConnectWallet = ethereumVirtualMachine.ConnectWalletButton;

  const router = useRouter();
  const authenticateEthereumVirtualMachine = api.ethereumVirtualMachine({});
  const logout = api.logout({
    reactQueryOptions: {
      enabled: false,
    },
  });
  const account = useAccount();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: Date.now().toString(),
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!account?.address) {
      toast.error("No account found");
      return;
    }

    const signedMessage = await signMessage(
      ethereumVirtualMachine.wagmiConfig,
      {
        message: data.message,
      },
    );

    authenticateEthereumVirtualMachine.mutate({
      data: {
        message: data.message,
        signature: signedMessage,
        address: account.address,
      },
    });
  }

  useEffect(() => {
    const jwt = Cookie.get("sps-rbac.authentication.jwt");

    if (account.isConnected && !jwt) {
      form.handleSubmit(onSubmit)();
    }

    if (!account.isConnected && jwt) {
      logout.refetch();
      router.push("/");
    }
  }, [account.isConnected]);

  useEffect(() => {
    if (authenticateEthereumVirtualMachine.isSuccess) {
      router.refresh();
    }
  }, [authenticateEthereumVirtualMachine.isSuccess]);

  useEffect(() => {
    if (authenticateEthereumVirtualMachine.isError) {
      disconnect(ethereumVirtualMachine.wagmiConfig);
    }
  }, [authenticateEthereumVirtualMachine.isError]);

  return (
    <div
      data-module="sps-rbac"
      data-model="subject"
      data-variant={props.variant}
      className="w-full"
    >
      <Form {...form}>
        <ConnectWallet className="w-full lg:w-fit" />
      </Form>
    </div>
  );
}
