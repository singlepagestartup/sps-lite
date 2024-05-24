import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Slide } from "@sps/sps-website-builder-models-slide-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="sliders-to-slides"
      data-variant={props.variant}
      className="w-full"
    >
      <Slide
        isServer={props.isServer}
        variant={props.data.slide.variant}
        data={props.data.slide}
      />
    </div>
  );
}
