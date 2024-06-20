import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Widget } from "@sps/sps-website-builder/models/widget/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="navbars-to-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Widget
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="default"
        data={props.data.widget}
      />
    </div>
  );
}
