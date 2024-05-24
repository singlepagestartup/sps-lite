import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as ButtonsArrays } from "@sps/sps-website-builder-models-buttons-array-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="hero-section-blocks-to-buttons-arrays"
      data-variant={props.variant}
      className="w-full"
    >
      <ButtonsArrays
        isServer={props.isServer}
        variant={props.data.buttonsArray.variant}
        data={props.data.buttonsArray}
      />
    </div>
  );
}
