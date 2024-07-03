import { IComponentPropsExtended } from "./interface";
import { Component as Buttons } from "@sps/sps-website-builder/models/button/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="buttons-arrays-to-buttons"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Buttons
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.button.variant}
        data={props.data.button}
      />
    </div>
  );
}
