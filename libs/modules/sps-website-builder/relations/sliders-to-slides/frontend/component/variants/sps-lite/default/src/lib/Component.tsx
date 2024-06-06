import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Slide } from "@sps/sps-website-builder-models-slide-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="sliders-to-slides"
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Slide
        isServer={props.isServer}
        variant={props.data.slide.variant}
        data={props.data.slide}
      />
    </div>
  );
}
