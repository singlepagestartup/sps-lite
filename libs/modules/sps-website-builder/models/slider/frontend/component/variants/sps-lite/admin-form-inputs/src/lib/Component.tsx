import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-slider-contracts";
import { Component as SlidersToSlidesSpsLiteSelectRight } from "@sps/sps-website-builder-relations-sliders-to-slides-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="slider"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          label="Title"
          name="title"
          form={props.form}
          placeholder="Type title"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Class name"
          name="className"
          form={props.form}
          placeholder="Type class name"
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />
        <ModelEntitiesListCard title="sliders-to-slides">
          <div className="flex flex-col gap-6">
            {props.data?.slidersToSlides.map((sliderToSlide, index) => {
              return (
                <SlidersToSlidesSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={sliderToSlide}
                />
              );
            })}
            <SlidersToSlidesSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
