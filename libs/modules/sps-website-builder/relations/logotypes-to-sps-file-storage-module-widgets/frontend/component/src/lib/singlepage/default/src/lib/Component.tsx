import { IComponentPropsExtended } from "./interface";
import { Component as SpsFileStorageWidget } from "@sps/sps-file-storage/models/widget/frontend/component";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="logotypes-to-sps-file-storage-module-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <SpsFileStorageWidget
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="default"
        data={{ id: props.data.spsFileStorageModuleWidgetId }}
      />
    </div>
  );
}
