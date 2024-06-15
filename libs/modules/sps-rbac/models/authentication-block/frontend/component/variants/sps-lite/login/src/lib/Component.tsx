import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Authentication } from "@sps/sps-rbac-models-authentication-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="authentication-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("flex w-full", props.data.className || "py-20")}
    >
      <div className="w-full max-w-7xl mx-auto">
        <Authentication
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="select-method"
        />
      </div>
    </div>
  );
}
