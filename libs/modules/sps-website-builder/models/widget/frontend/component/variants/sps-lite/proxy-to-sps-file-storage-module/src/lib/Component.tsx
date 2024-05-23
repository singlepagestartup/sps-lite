import React from "react";
import { IComponentPropsExtended } from "./interface";
import { App as SpsFileStorageApp } from "@sps/sps-file-storage-frontend";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
      className="w-full"
    >
      {props.data.widgetsToSpsFileStorageModuleWidgets.map((entity, index) => {
        return (
          <SpsFileStorageApp
            key={index}
            isServer={props.isServer}
            variant="default"
            widgetId={entity.spsFileStorageModuleWidgetId}
          />
        );
      })}
    </div>
  );
}
