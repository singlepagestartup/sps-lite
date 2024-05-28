import React from "react";
import { IComponentPropsExtended } from "./interface";
import { ModelEntitiesListCard, FormField } from "@sps/ui-adapter";
import { Component as WidgetsToHeroSectionBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToNavbarBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToFooterBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToSliderBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToStartupModuleWidgets } from "@sps/sps-website-builder-relations-widgets-to-startup-module-widgets-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder-relations-widgets-to-sps-file-storage-module-widgets-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToLogotypesSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-logotypes-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToSlidesSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-slides-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToFeaturesSectionBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          name="title"
          label="Title"
          form={props.form}
          placeholder="Type title"
        />

        <ModelEntitiesListCard title="widgets-to-slides">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToSlides.map((entity, index) => {
              return (
                <WidgetsToSlidesSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <WidgetsToSlidesSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="widgets-to-logotypes">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToLogotypes.map((entity, index) => {
              return (
                <WidgetsToLogotypesSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <WidgetsToLogotypesSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="widgets-to-hero-section-blocks">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToHeroSectionBlocks.map((entity, index) => {
              return (
                <WidgetsToHeroSectionBlocksSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <WidgetsToHeroSectionBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="widgets-to-features-section-blocks">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToFeaturesSectionBlocks.map((entity, index) => {
              return (
                <WidgetsToFeaturesSectionBlocksSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <WidgetsToFeaturesSectionBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="widgets-to-navbar-blocks">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToNavbarBlocks.map((entity, index) => {
              return (
                <WidgetsToNavbarBlocksSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <WidgetsToNavbarBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="widgets-to-footer-blocks">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToFooterBlocks.map((entity, index) => {
              return (
                <WidgetsToFooterBlocksSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <WidgetsToFooterBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="widgets-to-slider-blocks">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToSliderBlocks?.map((entity, index) => {
              return (
                <WidgetsToSliderBlocksSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <WidgetsToSliderBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="widgets-to-startup-module-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToStartupModuleWidgets?.map((entity, index) => {
              return (
                <WidgetsToStartupModuleWidgets
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <WidgetsToStartupModuleWidgets
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="widgets-to-sps-file-storage-modules-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToSpsFileStorageModuleWidgets.map(
              (entity, index) => {
                return (
                  <WidgetsToSpsFileStorageModuleWidgets
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={entity}
                  />
                );
              },
            )}
            <WidgetsToSpsFileStorageModuleWidgets
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
