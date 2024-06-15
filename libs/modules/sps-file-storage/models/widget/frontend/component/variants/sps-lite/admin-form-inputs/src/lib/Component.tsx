"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-file-storage-models-widget-contracts";
import { Component as WidgetsToFilesSpsLiteSelectRight } from "@sps/sps-file-storage-relations-widgets-to-files-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-file-storage"
      data-model="widget"
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
          placeholder="Type title"
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
        <ModelEntitiesListCard title="widgets-to-files">
          <div className="flex flex-col gap-6">
            {props.data?.widgetsToFiles.map((entity, index) => {
              return (
                <WidgetsToFilesSpsLiteSelectRight
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  widgetId={props.data?.id}
                  data={entity}
                />
              );
            })}
            <WidgetsToFilesSpsLiteSelectRight
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
