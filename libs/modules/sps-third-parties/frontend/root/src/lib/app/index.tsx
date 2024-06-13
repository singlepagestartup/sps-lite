import React from "react";
import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/sps-third-parties-models-widget-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  return (
    <div data-module="startup" className={cn("w-full flex", props.className)}>
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
