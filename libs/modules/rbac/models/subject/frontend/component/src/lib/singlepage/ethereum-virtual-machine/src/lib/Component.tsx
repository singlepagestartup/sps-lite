"use client";

import React, { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { z } from "zod";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form } from "@sps/shared-ui-shadcn";
import { toast } from "sonner";
import { useAccount } from "wagmi";
import { disconnect, signMessage } from "@wagmi/core";
import { ethereumVirtualMachine } from "@sps/shared-frontend-client-web3";
import { useCookies } from "react-cookie";
import { api as subjectsToIdentitiesApi } from "@sps/rbac/relations/subjects-to-identities/sdk/server";

const formSchema = z.object({
  message: z.string().min(8),
});

export function Component(props: IComponentPropsExtended) {
  const ConnectWallet = ethereumVirtualMachine.ConnectWalletButton;
  const [jwt, setJwt] = useState<string | undefined>();
  const [cookies] = useCookies(["rbac.subject.jwt"]);
  const [isClient, setIsClient] = useState(false);
  const { data: meData, refetch } = api.me();

  const authenticateEthereumVirtualMachine = api.ethereumVirtualMachine({});
  const logout = api.logout({
    reactQueryOptions: {
      enabled: false,
    },
  });
  const account = useAccount();

  useEffect(() => {
    if (cookies["rbac.subject.jwt"] !== jwt) {
      setJwt(cookies["rbac.subject.jwt"]);
    }
  }, [cookies["rbac.subject.jwt"]]);

  useEffect(() => {
    refetch();
  }, [jwt]);

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
      ethereumVirtualMachine.wagmiConfig.default,
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
    if (account.isConnected) {
      form.handleSubmit(onSubmit)();
    }
  }, [account.isConnected]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (meData?.id) {
      subjectsToIdentitiesApi
        .find({
          params: {
            filters: {
              and: [
                {
                  column: "subjectId",
                  method: "eq",
                  value: meData?.id,
                },
              ],
            },
          },
        })
        .then((res) => {
          if (!res?.length && account?.address) {
            logoutAction();
          }
        });
    }
  }, [meData]);

  useEffect(() => {
    if (authenticateEthereumVirtualMachine.isError) {
      disconnect(ethereumVirtualMachine.wagmiConfig.default);
    }
  }, [authenticateEthereumVirtualMachine.isError]);

  function logoutAction() {
    disconnect(ethereumVirtualMachine.wagmiConfig.default);
    logout.refetch();
  }

  if (!isClient) {
    return null;
  }

  return (
    <div
      data-module="rbac"
      data-model="subject"
      data-variant={props.variant}
      className="w-full"
    >
      <Form {...form}>
        {!account.isConnected ? (
          <ConnectWallet className="w-full lg:w-fit" variant="default" />
        ) : (
          <Button variant="outline" onClick={logoutAction}>
            Logout
          </Button>
        )}
      </Form>
    </div>
  );
}
