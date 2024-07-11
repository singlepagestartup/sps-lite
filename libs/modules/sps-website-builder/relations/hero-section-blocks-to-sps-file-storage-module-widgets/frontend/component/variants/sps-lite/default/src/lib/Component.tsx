import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { App as SpsFileStorageApp } from "@sps/sps-file-storage/frontend/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="hero-section-blocks-to-sps-file-storage-module-widgets"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <SpsFileStorageApp
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="default"
        data={{
          id: props.data.spsFileStorageModuleWidgetId,
        }}
      />
    </div>
  );
}
