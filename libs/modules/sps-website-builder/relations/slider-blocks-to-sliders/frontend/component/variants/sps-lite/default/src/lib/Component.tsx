import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Slider } from "@sps/sps-website-builder-models-slider-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="slider-blocks-to-sliders"
      data-variant={props.variant}
      className=""
    >
      <Slider
        isServer={props.isServer}
        variant={props.data.slider.variant}
        data={props.data.slider}
      />
    </div>
  );
}
