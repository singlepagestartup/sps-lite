import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { Component as NavbarsToWidgetsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-navbars-to-widgets-frontend-component-variants-sps-lite-select-right";
import { variants } from "@sps/sps-website-builder-models-navbar-contracts";

export function Component(props: IComponentPropsExtended) {
  return (
    <form
      data-module="sps-website-builder"
      data-model="navbar"
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

        <ModelEntitiesListCard title="navbars-to-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.navbarsToWidgets.map((entity, index) => {
              return (
                <NavbarsToWidgetsSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  navbarId={props.data?.id}
                  data={entity}
                />
              );
            })}

            <NavbarsToWidgetsSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              navbarId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </form>
  );
}
