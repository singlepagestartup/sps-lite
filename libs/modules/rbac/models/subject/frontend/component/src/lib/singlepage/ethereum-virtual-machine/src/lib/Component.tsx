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
// import { IModel as ISubjectsToIdenties } from "@sps/rbac/relations/subjects-to-identities/sdk/model";

const formSchema = z.object({
  message: z.string().min(8),
});

export function Component(props: IComponentPropsExtended) {
  const ConnectWallet = ethereumVirtualMachine.ConnectWalletButton;
  const [jwt, setJwt] = useState<string | undefined>();
  const [cookies] = useCookies(["rbac.subject.jwt"]);
  const [isClient, setIsClient] = useState(false);
  const { data: meData, refetch } = api.me();
  // const [subjectToIdentites, setSubjectsToIdentities] = useState<any[]>();

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
    if (jwt && !meData) {
      refetch();
    }
  }, [jwt, meData]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: Date.now().toString(),
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
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
    } catch (error: any) {
      toast.error("An error occurred:" + error.message);
    }
  }

  // useEffect(() => {
  //   console.log(
  //     `🚀 ~ useEffect ~ subjectToIdentites:`,
  //     account.isConnected,
  //     subjectToIdentites,
  //     meData,
  //   );

  //   if (!subjectToIdentites) {
  //     return;
  //   }

  //   // if (meData && account.isConnected && !subjectToIdentites.length) {
  //   //   console.log(`🚀 ~ useEffect ~ subjectToIdentites ~ handleSubmit`);
  //   //   form.handleSubmit(onSubmit)();
  //   // }
  // }, [account.isConnected, subjectToIdentites, meData]);

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
          // setSubjectsToIdentities(res);

          if (account.isConnected && !res?.length) {
            console.log(`🚀 ~ useEffect ~ subjectToIdentites ~ handleSubmit`);
            form.handleSubmit(onSubmit)();
          }

          if (!res?.length && account?.address) {
            // logoutAction();
          }
        });
    }
  }, [meData, account.isConnected]);

  useEffect(() => {
    if (authenticateEthereumVirtualMachine.isError) {
      disconnect(ethereumVirtualMachine.wagmiConfig.default);
      return;
    }
    if (account.isConnected && !cookies["rbac.subject.jwt"]) {
      logoutAction();
    }
  }, [
    authenticateEthereumVirtualMachine.isError,
    cookies["rbac.subject.jwt"],
    account.isConnected,
  ]);

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
