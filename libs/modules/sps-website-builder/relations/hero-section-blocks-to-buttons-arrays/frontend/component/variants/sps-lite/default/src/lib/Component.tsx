import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as ButtonsArrays } from "@sps/sps-website-builder-models-buttons-array-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="hero-section-blocks-to-buttons-arrays"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <ButtonsArrays
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.buttonsArray.variant}
        data={props.data.buttonsArray}
      />
    </div>
  );
}
