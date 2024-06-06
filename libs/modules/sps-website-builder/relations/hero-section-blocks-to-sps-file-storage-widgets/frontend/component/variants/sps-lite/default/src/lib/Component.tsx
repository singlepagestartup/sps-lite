import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { App as SpsFileStorageApp } from "@sps/sps-file-storage-frontend";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="hero-section-blocks-to-sps-file-storage-widgets"
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <SpsFileStorageApp
        isServer={props.isServer}
        variant="default"
        data={{
          id: props.data.spsFileStorageWidgetId,
        }}
      />
    </div>
  );
}
