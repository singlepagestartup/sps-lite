import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as Widget } from "@sps/sps-host/models/widget/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-relation="layouts-to-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      <Widget
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.widget.variant}
        data={props.data.widget}
        hostChildren={props.hostChildren}
      />
    </div>
  );
}
