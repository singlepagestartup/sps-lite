import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { App as SpsFileStorage } from "@sps/sps-file-storage-frontend";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-sps-file-storage-module-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className || "")}
    >
      <SpsFileStorage
        isServer={props.isServer}
        variant="default"
        data={{
          id: props.data.spsFileStorageModuleWidgetId,
        }}
      />
    </div>
  );
}
