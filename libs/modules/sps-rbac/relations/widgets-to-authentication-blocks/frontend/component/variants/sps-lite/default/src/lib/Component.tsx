import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as AuthenticationBlock } from "@sps/sps-rbac-models-authentication-block-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-relation="widgets-to-authentication-blocks"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full", props.data.className)}
    >
      <AuthenticationBlock
        isServer={props.isServer}
        variant={props.data.authenticationBlock.variant}
        data={props.data.authenticationBlock}
      />
    </div>
  );
}
