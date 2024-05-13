import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Widget } from "@sps/sps-website-builder-models-widget-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="pages-to-widgets"
      data-variant={props.variant}
      className=""
    >
      <Widget
        isServer={props.isServer}
        variant="default"
        data={props.data.widget}
      />
    </div>
  );
}
