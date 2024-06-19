"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-host-models-widget-contracts";
import { Component as WidgetsToSpsWebsiteBuilderWidgets } from "@sps/sps-host-relations-widgets-to-sps-website-builder-module-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
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

        <ModelEntitiesListCard title="widgets-to-sps-website-builder-module-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToSpsWebsiteBuilderModuleWidgets.map(
              (entity, index) => {
                return (
                  <WidgetsToSpsWebsiteBuilderWidgets
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="select-right"
                    data={entity}
                  />
                );
              },
            )}
            <WidgetsToSpsWebsiteBuilderWidgets
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
