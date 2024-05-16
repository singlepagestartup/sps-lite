import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="logotypes-to-files"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <File
        isServer={props.isServer}
        variant="default"
        data={{ id: props.data.fileId }}
      />
    </div>
  );
}
