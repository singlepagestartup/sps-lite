import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as SliderBlock } from "@sps/sps-website-builder-models-slider-block-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-slider-blocks"
      data-variant={props.variant}
      className=""
    >
      <SliderBlock
        isServer={props.isServer}
        variant={props.data.sliderBlock.variant}
        data={props.data.sliderBlock}
      />
    </div>
  );
}
