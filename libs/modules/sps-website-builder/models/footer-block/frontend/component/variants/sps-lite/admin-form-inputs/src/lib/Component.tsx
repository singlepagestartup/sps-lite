"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-footer-block-contracts";
import { Component as FooterBlocksToLogotypes } from "@sps/sps-website-builder-relations-footer-blocks-to-logotypes-frontend-component-variants-sps-lite-select-right";
import { Component as FooterBlocksToButtonsArrays } from "@sps/sps-website-builder-relations-footer-blocks-to-buttons-arrays-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="footer-block"
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
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Type title"
          options={variants.map((variant) => [variant, variant])}
        />

        <ModelEntitiesListCard title="footer-blocks-to-logotypes">
          <div className="flex flex-col gap-6">
            {props.data?.footerBlocksToLogotypes.map((entity, index) => {
              return (
                <FooterBlocksToLogotypes
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <FooterBlocksToLogotypes
              isServer={props.isServer}
              variant="select-right"
              footerBlockId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="footer-blocks-to-buttons-arrays">
          <div className="flex flex-col gap-6">
            {props.data?.footerBlocksToButtonsArrays.map((entity, index) => {
              return (
                <FooterBlocksToButtonsArrays
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <FooterBlocksToButtonsArrays
              isServer={props.isServer}
              variant="select-right"
              footerBlockId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
