import { IComponentPropsExtended } from "./interface";
import { Component as Slide } from "@sps/sps-website-builder/models/slide/frontend/component/root";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="sliders-to-slides"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Slide
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.slide.variant as any}
        data={props.data.slide}
      />
    </div>
  );
}
