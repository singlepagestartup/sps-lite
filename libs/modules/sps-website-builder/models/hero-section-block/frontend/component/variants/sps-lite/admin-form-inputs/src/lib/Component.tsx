import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { Component as HeroSectionsToButtonsArraysSpsLiteSelectRight } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-arrays-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <form
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`w-full ${props.className || "flex flex-col gap-6"}`}
    >
      <FormField
        ui="shadcn"
        type="text"
        name="title"
        label="Title"
        form={props.form}
        placeholder="Type title"
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
      <ModelEntitiesListCard title="hero-section-block-to-buttons-arrays">
        <div className="flex flex-col gap-6">
          {props.data?.heroSectionBlocksToButtonsArrays.map((entity, index) => {
            return (
              <HeroSectionsToButtonsArraysSpsLiteSelectRight
                key={index}
                data={entity}
                isServer={props.isServer}
                variant="select-right"
              />
            );
          })}
          <HeroSectionsToButtonsArraysSpsLiteSelectRight
            isServer={props.isServer}
            variant="select-right"
          />
        </div>
      </ModelEntitiesListCard>
    </form>
  );
}
