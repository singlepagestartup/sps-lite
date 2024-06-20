"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";
import {
  variants,
  providers,
} from "@sps/sps-rbac/models/identity/contracts/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="identity"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          label="Account"
          name="account"
          form={props.form}
          placeholder="Enter account"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Email"
          name="email"
          form={props.form}
          placeholder="Enter email"
        />
        <FormField
          ui="shadcn"
          type="password"
          label="Password"
          name="password"
          form={props.form}
          placeholder="Enter password"
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Provider"
          name="provider"
          form={props.form}
          placeholder="Select provider"
          options={providers.map((provider) => [provider, provider])}
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
