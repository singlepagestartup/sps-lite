import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-navbar-block-contracts";
import { Component as NavbarBlocksToButtonsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-frontend-component-variants-sps-lite-select-right";
import { Component as NavbarBlocksToLogotypes } from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="navbar-block"
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
          options={variants.map((variant) => [variant, variant])}
        />

        <ModelEntitiesListCard title="navbar-blocks-to-buttons">
          <div className="flex flex-col gap-6">
            {props.data?.navbarBlocksToButtons.map(
              (navbarBlocksToButton, index) => {
                return (
                  <NavbarBlocksToButtonsSpsLiteSelectRight
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={navbarBlocksToButton}
                  />
                );
              },
            )}
            <NavbarBlocksToButtonsSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
            />
          </div>
        </ModelEntitiesListCard>

        <ModelEntitiesListCard title="navbar-blocks-to-logotypes">
          <div className="flex flex-col gap-6">
            {props.data?.navbarBlocksToLogotypes.map(
              (navbarBlocksToLogotypes, index) => {
                return (
                  <NavbarBlocksToLogotypes
                    key={index}
                    variant="select-right"
                    isServer={props.isServer}
                    data={navbarBlocksToLogotypes}
                  />
                );
              },
            )}
            <NavbarBlocksToLogotypes
              variant="select-right"
              isServer={props.isServer}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
