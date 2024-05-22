import React from "react";
import { IComponentPropsExtended } from "./interface";
import { variants } from "@sps/sps-website-builder-models-slider-block-contracts";
import { Component as SliderBlocksToSlidersSpsLiteSelectRight } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-frontend-component-variants-sps-lite-select-right";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="slider-block"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Type title"
          options={variants.slice()}
        />
        <ModelEntitiesListCard title="slider-block-to-sliders">
          <div className="flex flex-col gap-6">
            {props.data?.sliderBlocksToSliders.map(
              (sliderBlocksToSliders, index) => {
                return (
                  <SliderBlocksToSlidersSpsLiteSelectRight
                    isServer={props.isServer}
                    key={index}
                    data={sliderBlocksToSliders}
                    variant="select-right"
                  />
                );
              },
            )}
            <SliderBlocksToSlidersSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
