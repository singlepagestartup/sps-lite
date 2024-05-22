"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className="flex flex-col gap-3"
    >
      <FormField
        ui="shadcn"
        type="select"
        name={props.formFieldName}
        label="layout"
        form={props.form}
        placeholder="Select layout"
        options={props.data.map((entity): string => {
          if (props.renderField && entity[props.renderField]) {
            const renderValue = entity[props.renderField];
            if (typeof renderValue === "string") {
              return renderValue;
            }
          }

          return entity.id;
        })}
      />
    </div>
  );
}
