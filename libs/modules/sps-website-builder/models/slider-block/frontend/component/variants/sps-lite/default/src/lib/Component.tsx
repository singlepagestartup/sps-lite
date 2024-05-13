import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as SliderBlocksToSliders } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="slider-block"
      data-variant={props.variant}
      className={`w-full ${props.data.className || ""}`}
    >
      <div className="px-2 w-full max-w-7xl mx-auto">
        {props.data.SPSWBSliderBlocksToSliders.map(
          (sliderBlocksToSliders, index) => {
            return (
              <SliderBlocksToSliders
                key={index}
                isServer={props.isServer}
                variant="default"
                data={sliderBlocksToSliders}
              />
            );
          },
        )}
      </div>
    </div>
  );
}
