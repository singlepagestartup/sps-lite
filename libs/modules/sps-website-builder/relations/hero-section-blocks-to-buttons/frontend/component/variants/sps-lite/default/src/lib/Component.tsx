import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="hero-section-blocks-to-buttons"
      data-variant={props.variant}
      className=""
    >
      <Button
        isServer={props.isServer}
        variant={props.data.button.variant}
        data={props.data.button}
      />
    </div>
  );
}
