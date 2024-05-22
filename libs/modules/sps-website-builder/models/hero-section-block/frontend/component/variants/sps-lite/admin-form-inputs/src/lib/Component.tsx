import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { Component as HeroSectionsToButtonsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <form
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`${props.className || "flex flex-col gap-6"}`}
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
        options={variants.slice()}
      />
      <ModelEntitiesListCard title="hero-section-block-to-buttons">
        <div className="flex flex-col gap-6">
          {props.data?.heroSectionBlocksToButtons.map(
            (heroSectionBlocksToButton, index) => {
              return (
                <HeroSectionsToButtonsSpsLiteSelectRight
                  key={index}
                  data={heroSectionBlocksToButton}
                  isServer={props.isServer}
                  variant="select-right"
                />
              );
            },
          )}
          <HeroSectionsToButtonsSpsLiteSelectRight
            isServer={props.isServer}
            variant="select-right"
          />
        </div>
      </ModelEntitiesListCard>
    </form>
  );
}
