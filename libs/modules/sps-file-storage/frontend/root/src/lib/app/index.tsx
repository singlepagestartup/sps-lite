import React from "react";
import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/sps-file-storage-models-widget-frontend-component";

export function App(props: IComponentProps) {
  return (
    <div className="w-full">
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
