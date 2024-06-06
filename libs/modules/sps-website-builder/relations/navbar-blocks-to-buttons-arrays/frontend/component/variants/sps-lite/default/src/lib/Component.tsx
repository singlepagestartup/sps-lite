import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as ButtonsArray } from "@sps/sps-website-builder-models-buttons-array-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="navbar-blocks-to-buttons-arrays"
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <ButtonsArray
        isServer={props.isServer}
        variant={props.data.buttonsArray.variant}
        data={props.data.buttonsArray}
      />
    </div>
  );
}
