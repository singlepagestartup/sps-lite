"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";
import {
  variants,
  methods,
  types,
} from "@sps/sps-rbac-models-permission-contracts";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="permission"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="select"
          label="Type"
          name="type"
          form={props.form}
          placeholder="Select type"
          options={types.map((type) => [type, type])}
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Method"
          name="method"
          form={props.form}
          placeholder="Select method"
          options={methods.map((method) => [method, method])}
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Path"
          name="path"
          form={props.form}
          placeholder="Enter path"
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
      </div>
    </div>
  );
}
