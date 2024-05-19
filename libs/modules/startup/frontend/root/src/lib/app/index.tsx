import React from "react";
import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/startup-models-widget-frontend-component";

export function App(props: IComponentProps) {
  return (
    <div className="">
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