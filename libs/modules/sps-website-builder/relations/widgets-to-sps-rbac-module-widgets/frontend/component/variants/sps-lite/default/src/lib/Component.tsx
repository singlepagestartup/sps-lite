import React from "react";
import { IComponentPropsExtended } from "./interface";
import { App as SpsRbacApp } from "@sps/sps-rbac/frontend/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-sps-rbac-module-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      {props.data.spsRbacModuleWidgetId ? (
        <SpsRbacApp
          variant="default"
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          widgetId={props.data.spsRbacModuleWidgetId}
        />
      ) : null}
    </div>
  );
}
