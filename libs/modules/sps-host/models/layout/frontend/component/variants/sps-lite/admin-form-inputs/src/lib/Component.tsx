"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-host-models-layout-contracts";
import { Component as LayoutsToWidgets } from "@sps/sps-host-relations-layouts-to-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-model="layout"
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
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Type title"
          options={variants.map((variant) => [variant, variant])}
        />
        <ModelEntitiesListCard title="layouts-to-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.layoutsToWidgets.map((entity, index) => {
              return (
                <LayoutsToWidgets
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  layoutId={props.data?.id}
                  data={entity}
                />
              );
            })}
            <LayoutsToWidgets
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              layoutId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
