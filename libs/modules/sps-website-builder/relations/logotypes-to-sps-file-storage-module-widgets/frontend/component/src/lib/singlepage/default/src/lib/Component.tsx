import { IComponentPropsExtended } from "./interface";
import { App as SpsFileStorage } from "@sps/sps-file-storage/frontend/component";
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
      <SpsFileStorage
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="default"
        data={{ id: props.data.spsFileStorageModuleWidgetId }}
      />
    </div>
  );
}
