import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as HeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widgets-to-hero-section-blocks"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <HeroSectionBlock
        isServer={props.isServer}
        variant={props.data.heroSectionBlock.variant}
        data={props.data.heroSectionBlock}
      />
    </div>
  );
}
