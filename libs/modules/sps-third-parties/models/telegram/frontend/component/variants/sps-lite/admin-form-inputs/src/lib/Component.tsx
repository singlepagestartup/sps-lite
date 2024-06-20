"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";
import { variants } from "@sps/sps-third-parties/models/telegram/contracts/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-third-parties"
      data-model="telegram"
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
          type="text"
          label="Token"
          name="token"
          form={props.form}
          placeholder="Enter token"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Password"
          name="password"
          form={props.form}
          placeholder="Enter launch password"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Username"
          name="username"
          form={props.form}
          placeholder="Enter bot username in @format"
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Status"
          name="status"
          form={props.form}
          placeholder="Select status"
          options={[
            ["active", "Active"],
            ["inactive", "Inactive"],
          ]}
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
