"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-rbac-models-widget-contracts";
import { Component as WidgetsToAuthenticationBlocksSpsLiteSelectRight } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
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
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />
        <ModelEntitiesListCard title="widgets-to-authentication-blocks">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToAuthenticationBlocks.map((entity, index) => {
              return (
                <WidgetsToAuthenticationBlocksSpsLiteSelectRight
                  key={index}
                  data={entity}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                />
              );
            })}
            <WidgetsToAuthenticationBlocksSpsLiteSelectRight
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              widgetId={props.data?.id}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
