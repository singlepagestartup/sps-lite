import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-footer-contracts";
import { Component as FootersToWidgetsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-footers-to-widgets-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="footer"
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
        <ModelEntitiesListCard title="footers-to-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.footersToWidgets.map((footerToWidget, index) => {
              return (
                <FootersToWidgetsSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  data={footerToWidget}
                  variant="select-right"
                />
              );
            })}

            <FootersToWidgetsSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
