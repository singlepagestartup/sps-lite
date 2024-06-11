"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-features-section-block-contracts";
import { Component as FeaturesSectionBlocksToFeatures } from "@sps/sps-website-builder-relations-features-section-blocks-to-features-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="features-section-block"
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
          placeholder="Enter title"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Subtitle"
          name="subtitle"
          form={props.form}
          placeholder="Enter subtitle"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Description"
          name="description"
          form={props.form}
          placeholder="Enter description"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Class name"
          name="className"
          form={props.form}
          placeholder="Enter class name"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Anchor"
          name="anchor"
          form={props.form}
          placeholder="Enter anchor"
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

        <ModelEntitiesListCard title="features-section-block-to-features">
          <div className="flex flex-col gap-6">
            {props.data?.featuresSectionBlocksToFeatures.map(
              (entity, index) => {
                return (
                  <FeaturesSectionBlocksToFeatures
                    key={index}
                    data={entity}
                    isServer={props.isServer}
                    variant="select-right"
                  />
                );
              },
            )}
            <FeaturesSectionBlocksToFeatures
              isServer={props.isServer}
              variant="select-right"
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
