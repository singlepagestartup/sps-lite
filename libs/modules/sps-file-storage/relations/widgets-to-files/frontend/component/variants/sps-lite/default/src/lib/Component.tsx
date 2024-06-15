import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-file-storage"
      data-relation="widgets-to-files"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full flex"
    >
      <File
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.file.variant}
        data={props.data.file}
      />
    </div>
  );
}
