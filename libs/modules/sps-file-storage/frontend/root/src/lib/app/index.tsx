import React from "react";
import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/sps-file-storage-models-widget-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  return (
    <div className={cn("w-full", props.className)}>
      <Widget isServer={props.isServer} variant="default" data={props.data} />
    </div>
  );
}
