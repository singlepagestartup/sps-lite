import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { Component as LayoutsToNavbarsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-layouts-to-navbars-frontend-component-variants-sps-lite-select-right";
import { Component as LayoutsToFooterSpsLiteSelectRight } from "@sps/sps-website-builder-relations-layouts-to-footers-frontend-component-variants-sps-lite-select-right";
import { variants } from "@sps/sps-website-builder-models-layout-contracts";

export function Component(props: IComponentPropsExtended) {
  return (
    <form
      data-module="sps-website-builder"
      data-model="layout"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="space-y-8"
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
      <ModelEntitiesListCard title="layouts-to-navbars">
        <div className="flex flex-col gap-6">
          {props.data?.layoutsToNavbars.map((layoutToNavbar, index) => {
            return (
              <LayoutsToNavbarsSpsLiteSelectRight
                key={index}
                isServer={props.isServer}
                data={layoutToNavbar}
                variant="select-right"
              />
            );
          })}
          <LayoutsToNavbarsSpsLiteSelectRight
            isServer={props.isServer}
            variant="select-right"
          />
        </div>
      </ModelEntitiesListCard>
      <ModelEntitiesListCard title="layouts-to-footers">
        <div className="flex flex-col gap-6">
          {props.data?.layoutsToFooters.map((layoutToFooter, index) => {
            return (
              <LayoutsToFooterSpsLiteSelectRight
                key={index}
                isServer={props.isServer}
                data={layoutToFooter}
                variant="select-right"
              />
            );
          })}
          <LayoutsToFooterSpsLiteSelectRight
            isServer={props.isServer}
            variant="select-right"
          />
        </div>
      </ModelEntitiesListCard>
    </form>
  );
}
