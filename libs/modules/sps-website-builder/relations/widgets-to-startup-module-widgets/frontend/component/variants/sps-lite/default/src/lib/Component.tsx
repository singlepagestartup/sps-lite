import React from "react";
import { IComponentPropsExtended } from "./interface";
import { App as Startup } from "@sps/startup-frontend";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-startup-module-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      {props.data.startupModuleWidgetId ? (
        <Startup
          variant="default"
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          widgetId={props.data.startupModuleWidgetId}
        />
      ) : null}
    </div>
  );
}
