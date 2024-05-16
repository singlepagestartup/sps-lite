import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as SlidersToSlides } from "@sps/sps-website-builder-relations-sliders-to-slides-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="slider"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      {props.data.slidersToSlides.map((slidersToSlides, index) => {
        return (
          <SlidersToSlides
            key={index}
            isServer={props.isServer}
            variant="default"
            data={slidersToSlides}
          />
        );
      })}
    </div>
  );
}
