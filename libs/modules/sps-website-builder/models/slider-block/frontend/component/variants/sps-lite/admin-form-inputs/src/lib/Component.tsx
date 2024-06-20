import React from "react";
import { IComponentPropsExtended } from "./interface";
import { variants } from "@sps/sps-website-builder/models/slider-block/contracts/root";
import { Component as SliderBlocksToSlidersSpsLiteSelectRight } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/frontend/component/variants/sps-lite/select-right";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="slider-block"
      data-id={props.data?.id || ""}
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
          label="Subtitle"
          name="subtitle"
          form={props.form}
          placeholder="Type subtitle"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Description"
          name="description"
          form={props.form}
          placeholder="Type description"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Anchor"
          name="anchor"
          form={props.form}
          placeholder="Type anchor"
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
          placeholder="Type title"
          options={variants.map((variant) => [variant, variant])}
        />
        <ModelEntitiesListCard title="slider-block-to-sliders">
          <div className="flex flex-col gap-6">
            {props.data?.sliderBlocksToSliders.map(
              (sliderBlocksToSliders, index) => {
                return (
                  <SliderBlocksToSlidersSpsLiteSelectRight
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    key={index}
                    data={sliderBlocksToSliders}
                    variant="select-right"
                  />
                );
              },
            )}
            <SliderBlocksToSlidersSpsLiteSelectRight
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
