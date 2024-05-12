import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as WidgetsToHeroSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
      className=""
    >
      {props.data.SPSWBWidgetsToHeroSectionBlocks?.map(
        (widgetToHeroSectionBlock, index) => {
          return (
            <WidgetsToHeroSectionBlocks
              key={index}
              isServer={props.isServer}
              variant="default"
              data={widgetToHeroSectionBlock}
            />
          );
        },
      )}
    </div>
  );
}
