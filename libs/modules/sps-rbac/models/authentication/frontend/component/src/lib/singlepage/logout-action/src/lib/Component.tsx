"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-rbac/models/authentication/sdk/client";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  const logout = api.logout({
    reactQueryOptions: {
      enabled: false,
    },
  });

  useEffect(() => {
    logout.refetch();
  }, []);

  useEffect(() => {
    if (logout.isSuccess) {
      router.push(props.redirectUrl || "/");
    }
  }, [logout.isSuccess]);

  return (
    <div
      data-module="sps-rbac"
      data-model="authentication"
      data-variant={props.variant}
      className={cn("")}
    ></div>
  );
}
