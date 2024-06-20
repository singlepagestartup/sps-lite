import React from "react";
import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/sps-file-storage/models/widget/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  return (
    <div className={cn("w-full flex", props.className)}>
      <Widget
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="default"
        data={props.data}
      />
    </div>
  );
}
