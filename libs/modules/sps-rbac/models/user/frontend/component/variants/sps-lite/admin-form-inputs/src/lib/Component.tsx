"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";
import { variants, statuses } from "@sps/sps-rbac-models-user-contracts";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="user"
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Status"
          name="status"
          form={props.form}
          placeholder="Select status"
          options={statuses.map((status) => [status, status])}
        />
      </div>
    </div>
  );
}
