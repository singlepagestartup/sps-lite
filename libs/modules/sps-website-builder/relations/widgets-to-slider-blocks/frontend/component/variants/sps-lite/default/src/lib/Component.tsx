import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as SliderBlock } from "@sps/sps-website-builder-models-slider-block-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-slider-blocks"
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <SliderBlock
        isServer={props.isServer}
        variant={props.data.sliderBlock.variant}
        data={props.data.sliderBlock}
      />
    </div>
  );
}
