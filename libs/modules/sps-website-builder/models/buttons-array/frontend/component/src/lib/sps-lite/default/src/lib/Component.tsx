import { IComponentPropsExtended } from "./interface";
// import { Component as ButtonsArrayToButtons } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="buttons-array"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      {props.buttons}
    </div>
  );
}
