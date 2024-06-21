import { IComponentPropsExtended } from "./interface";
import { Component as Slider } from "@sps/sps-website-builder/models/slider/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="slider-blocks-to-sliders"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Slider
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.slider.variant}
        data={props.data.slider}
      />
    </div>
  );
}
