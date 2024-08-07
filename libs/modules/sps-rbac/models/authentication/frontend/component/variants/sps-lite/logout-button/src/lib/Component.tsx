"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Button } from "@sps/ui-adapter";
import { api } from "@sps/sps-rbac/models/authentication/frontend/api/client";
import { useRouter } from "next/navigation";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const logout = api.logout();

  useEffect(() => {
    if (logout.isSuccess) {
      router.push("/");
    }
  }, []);

  return (
    <Button
      ui="shadcn"
      data-module="sps-rbac"
      data-model="authentication"
      data-variant={props.variant}
      onClick={() => {
        logout.mutate({});
      }}
      className={cn("w-full py-10 text-center flex flex-col gap-1")}
    >
      <p>Logout</p>
    </Button>
  );
}
