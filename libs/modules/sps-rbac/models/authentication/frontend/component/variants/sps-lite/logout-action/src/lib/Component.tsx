"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-rbac/models/authentication/frontend/api/client";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const [logout, logoutData] = api.rtk.useLogoutMutation({});

  useEffect(() => {
    if (logoutData.isUninitialized) {
      logout({});
    }

    if (logoutData.isSuccess) {
      router.refresh();
      router.push("/login");
    }
  }, [logoutData]);

  return (
    <div
      data-module="sps-rbac"
      data-model="authentication"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full py-10 text-center flex flex-col gap-1")}
    >
      <p className="font-bold">Generated variant</p>
    </div>
  );
}
