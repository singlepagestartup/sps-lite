import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-model="layout"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      {props.children}
    </div>
  );
}
