import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as Widget } from "@sps/sps-host-models-widget-frontend-component";

export function Component(props: IComponentPropsExtended) {
  console.log(`🚀 ~ Component ~ props:`, props);
  return (
    <div
      data-module="sps-host"
      data-relation="pages-to-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      <Widget
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        data={props.data.widget}
        variant={props.data.widget.variant}
        hostChildren={props.hostChildren}
      />
    </div>
  );
}
