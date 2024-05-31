import React from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as FeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-features-section-blocks"
      data-variant={props.variant}
      className={cn("w-full", props.data.className || "")}
    >
      <FeaturesSectionBlock
        isServer={props.isServer}
        variant={props.data.featuresSectionBlock.variant}
        data={props.data.featuresSectionBlock}
      />
    </div>
  );
}
