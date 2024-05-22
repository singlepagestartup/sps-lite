import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as WidgetsToHeroSectionBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToNavbarBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToFooterBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToSliderBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-frontend-component-variants-sps-lite-select-right";
import { ModelEntitiesListCard, FormField } from "@sps/ui-adapter";

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

        <ModelEntitiesListCard title="widgets-to-hero-section-blocks">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToHeroSectionBlocks.map(
              (widgetsToHeroSectionBlock, index) => {
                return (
                  <WidgetsToHeroSectionBlocksSpsLiteSelectRight
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={widgetsToHeroSectionBlock}
                  />
                );
              },
            )}
            <WidgetsToHeroSectionBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="widgets-to-navbar-blocks">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToNavbarBlocks.map(
              (widgetsToNavbarBlocks, index) => {
                return (
                  <WidgetsToNavbarBlocksSpsLiteSelectRight
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={widgetsToNavbarBlocks}
                  />
                );
              },
            )}
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
            {props.data?.widgetsToFooterBlocks.map(
              (widgetToFooterBlock, index) => {
                return (
                  <WidgetsToFooterBlocksSpsLiteSelectRight
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={widgetToFooterBlock}
                  />
                );
              },
            )}
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
            {props.data?.widgetsToSliderBlocks?.map(
              (widgetToSliderBlock, index) => {
                return (
                  <WidgetsToSliderBlocksSpsLiteSelectRight
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={widgetToSliderBlock}
                  />
                );
              },
            )}
            <WidgetsToSliderBlocksSpsLiteSelectRight
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
