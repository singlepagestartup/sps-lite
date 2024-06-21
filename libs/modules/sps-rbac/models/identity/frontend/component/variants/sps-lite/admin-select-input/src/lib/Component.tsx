"use client";

import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="identity"
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <FormField
        ui="shadcn"
        type="select"
        name={props.formFieldName}
        label="identity"
        form={props.form}
        placeholder="Select identity"
        options={props.data.map((entity) => {
          if (props.renderField && entity[props.renderField]) {
            const renderValue = entity[props.renderField];
            if (typeof renderValue === "string") {
              return [entity.id, renderValue];
            }
          }

          return [
            entity.id,
            `Provider: ${entity.provider} | ${entity.account || entity.email || ""}` ||
              entity.id,
          ];
        })}
      />
    </div>
  );
}
