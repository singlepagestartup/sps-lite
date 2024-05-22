"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="logotype"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <FormField
        ui="shadcn"
        type="select"
        name={props.formFieldName}
        label="logotype"
        form={props.form}
        placeholder="Select logotype"
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
