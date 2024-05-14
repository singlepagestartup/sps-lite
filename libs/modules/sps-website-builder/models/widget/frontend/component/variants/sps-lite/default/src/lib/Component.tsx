import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as WidgetsToHeroSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-component";
import { Component as WidgetsToNavbarBlocks } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-frontend-component";
import { Component as WidgetsToFooterBlocks } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-frontend-component";
import { Component as WidgetsToSliderBlocks } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-frontend-component";
import { Component as WidgetToFeaturesSectionBlock } from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-frontend-component";

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
      {props.data.SPSWBWidgetsToNavbarBlocks.map(
        (widgetToNavbarBlock, index) => {
          return (
            <WidgetsToNavbarBlocks
              key={index}
              isServer={props.isServer}
              variant="default"
              data={widgetToNavbarBlock}
            />
          );
        },
      )}
      {props.data.SPSWBWidgetsToFooterBlocks.map(
        (widgetToFooterBlock, index) => {
          return (
            <WidgetsToFooterBlocks
              key={index}
              isServer={props.isServer}
              variant="default"
              data={widgetToFooterBlock}
            />
          );
        },
      )}
      {props.data.SPSWBWidgetsToSliderBlocks.map(
        (widgetToSliderBlock, index) => {
          return (
            <WidgetsToSliderBlocks
              key={index}
              isServer={props.isServer}
              variant="default"
              data={widgetToSliderBlock}
            />
          );
        },
      )}
      {props.data.SPSWBWidgetsToFeaturesSectionBlocks.map(
        (widgetToFeaturesSectionBlock, index) => {
          return (
            <WidgetToFeaturesSectionBlock
              key={index}
              isServer={props.isServer}
              variant="default"
              data={widgetToFeaturesSectionBlock}
            />
          );
        },
      )}
    </div>
  );
}
