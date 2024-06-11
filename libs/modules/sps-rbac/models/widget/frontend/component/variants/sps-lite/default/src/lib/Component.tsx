import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as WidgetsToAuthenticationBlocks } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full", props.data.className)}
    >
      {props.data.widgetsToAuthenticationBlocks.map((entity, index) => {
        return (
          <WidgetsToAuthenticationBlocks
            key={index}
            isServer={props.isServer}
            variant="default"
            data={entity}
          />
        );
      })}
    </div>
  );
}
