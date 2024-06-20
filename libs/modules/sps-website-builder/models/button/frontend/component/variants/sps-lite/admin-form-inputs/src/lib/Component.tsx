"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { variants } from "@sps/sps-website-builder/models/button/contracts/root";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="button"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`${props.className || ""}`}
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
          type="text"
          name="url"
          label="Url"
          form={props.form}
          placeholder="Type url"
        />
        <FormField
          ui="shadcn"
          type="text"
          name="className"
          label="Class Name"
          form={props.form}
          placeholder="Type class name"
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
      </div>
    </div>
  );
}
