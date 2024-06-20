import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as LayoutsToWidgets } from "@sps/sps-host-relations-layouts-to-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-model="layout"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className)}
    >
      {props.data.layoutsToWidgets.length
        ? props.data.layoutsToWidgets?.map((entity, index) => {
            return (
              <LayoutsToWidgets
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="default"
                data={entity}
                hostChildren={props.hostChildren}
              />
            );
          })
        : null}
      {props.children}
    </div>
  );
}
