import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as WidgetsToHeroSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-component";
import { Component as WidgetsToNavbarBlocks } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-frontend-component";
import { Component as WidgetsToFooterBlocks } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-frontend-component";
import { Component as WidgetsToSliderBlocks } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-frontend-component";
import { Component as WidgetToFeaturesSectionBlock } from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-frontend-component";
import { Component as WidgetsToStartupModuleWidgets } from "@sps/sps-website-builder-relations-widgets-to-startup-module-widgets-frontend-component";
import { Component as WidgetsToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-widgets-to-sps-file-storage-module-widgets-frontend-component";
import { Component as WidgetsToSpsRbacModuleWidgets } from "@sps/sps-website-builder-relations-widgets-to-sps-rbac-module-widgets-frontend-component";
import { cn } from "@sps/shared-frontend-utils-client";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      {/* {props.data.widgetsToHeroSectionBlocks?.map(
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
      {props.data.widgetsToNavbarBlocks.map((widgetToNavbarBlock, index) => {
        return (
          <WidgetsToNavbarBlocks
            key={index}
            isServer={props.isServer}
            variant="default"
            data={widgetToNavbarBlock}
          />
        );
      })}
      {props.data.widgetsToFooterBlocks.map((widgetToFooterBlock, index) => {
        return (
          <WidgetsToFooterBlocks
            key={index}
            isServer={props.isServer}
            variant="default"
            data={widgetToFooterBlock}
          />
        );
      })}
      {props.data.widgetsToSliderBlocks.map((widgetToSliderBlock, index) => {
        return (
          <WidgetsToSliderBlocks
            key={index}
            isServer={props.isServer}
            variant="default"
            data={widgetToSliderBlock}
          />
        );
      })}
      {props.data.widgetsToFeaturesSectionBlocks.map(
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
      {props.data.widgetsToStartupModuleWidgets.map((widgetToModule, index) => {
        return (
          <WidgetsToStartupModuleWidgets
            key={index}
            isServer={props.isServer}
            variant="default"
            data={widgetToModule}
          />
        );
      })}
      {props.data.widgetsToSpsFileStorageModuleWidgets.map((entity, index) => {
        return (
          <WidgetsToSpsFileStorageWidgets
            key={index}
            isServer={props.isServer}
            variant="default"
            data={entity}
          />
        );
      })} */}
      {props.data.widgetsToSpsRbacModuleWidgets.map((entity, index) => {
        return (
          <WidgetsToSpsRbacModuleWidgets
            key={index}
            isServer={props.isServer}
            variant="default"
            data={entity}
          />
        );
      })}
    </div>
  );
}
