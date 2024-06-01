import React from "react";
import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/sps-rbac-models-widget-frontend-component";

export function App(props: IComponentProps) {
  return (
    <div data-module="sps-rbac" className={props.className || ""}>
      <Widget
        isServer={props.isServer}
        variant="default"
        data={{
          id: props.widgetId,
        }}
      />
    </div>
  );
}
