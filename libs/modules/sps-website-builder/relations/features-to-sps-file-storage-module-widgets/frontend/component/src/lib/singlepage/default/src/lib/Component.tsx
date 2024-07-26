import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as SpsFileStorageFile } from "@sps/sps-file-storage/models/file/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="features-to-sps-file-storage-module-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className || "")}
    >
      {/* <SpsFileStorageFile
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="default"
        data={{ id: props.data.spsFileStorageModuleFileId }}
      /> */}
    </div>
  );
}
