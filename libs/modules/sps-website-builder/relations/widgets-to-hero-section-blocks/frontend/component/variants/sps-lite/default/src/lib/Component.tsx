import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as HeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widgets-to-hero-section-blocks"
      data-variant={props.variant}
      className=""
    >
      <HeroSectionBlock
        isServer={props.isServer}
        variant={props.data.heroSectionBlock.variant}
        data={props.data.heroSectionBlock}
      />
    </div>
  );
}
