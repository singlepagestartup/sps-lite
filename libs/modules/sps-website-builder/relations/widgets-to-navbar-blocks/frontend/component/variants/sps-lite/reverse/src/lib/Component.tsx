import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as WidgetSpsLiteProxyToSpsFileStorageModule } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-proxy-to-sps-file-storage-module";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-navbar-blocks"
      data-variant={props.variant}
      className="w-full"
    >
      <WidgetSpsLiteProxyToSpsFileStorageModule
        isServer={props.isServer}
        variant="proxy-to-sps-file-storage-module"
        data={props.data.widget}
      />
    </div>
  );
}
