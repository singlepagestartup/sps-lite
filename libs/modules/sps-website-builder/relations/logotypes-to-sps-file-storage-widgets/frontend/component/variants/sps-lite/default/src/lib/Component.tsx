import React from "react";
import { IComponentPropsExtended } from "./interface";
import { App as SpsFileStorage } from "@sps/sps-file-storage-frontend";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="logotypes-to-sps-file-storage-widgets"
      data-variant={props.variant}
      className={cn("w-full", props.data.className)}
    >
      <SpsFileStorage
        isServer={props.isServer}
        variant="default"
        data={{ id: props.data.spsFileStorageWidgetId }}
      />
    </div>
  );
}