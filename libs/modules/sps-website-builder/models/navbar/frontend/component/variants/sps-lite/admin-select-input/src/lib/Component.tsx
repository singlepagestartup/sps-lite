"use client";

import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="navbar"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <FormField
        ui="shadcn"
        type="select"
        name={props.formFieldName}
        label="navbar"
        form={props.form}
        placeholder="Select navbar"
        options={props.data.map((entity) => {
          if (props.renderField && entity[props.renderField]) {
            const renderValue = entity[props.renderField];
            if (typeof renderValue === "string") {
              return [entity.id, renderValue];
            }
          }

          return [entity.id, entity.id];
        })}
      />
    </div>
  );
}
