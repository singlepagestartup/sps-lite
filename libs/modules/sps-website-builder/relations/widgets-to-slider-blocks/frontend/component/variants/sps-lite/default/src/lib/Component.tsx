import { IComponentPropsExtended } from "./interface";
// import { Component as SliderBlock } from "@sps/sps-website-builder/models/slider-block/frontend/component/root";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-slider-blocks"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      {/* <SliderBlock
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.sliderBlock.variant}
        data={props.data.sliderBlock}
      /> */}
    </div>
  );
}
