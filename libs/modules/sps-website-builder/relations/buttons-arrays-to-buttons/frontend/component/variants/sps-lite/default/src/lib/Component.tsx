import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Buttons } from "@sps/sps-website-builder-models-button-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="buttons-arrays-to-buttons"
      data-variant={props.variant}
      className="w-full"
    >
      <Buttons
        isServer={props.isServer}
        variant={props.data.button.variant}
        data={props.data.button}
      />
    </div>
  );
}
