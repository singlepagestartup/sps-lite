"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";
import { variants } from "@sps/startup/models/widget/contracts/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="startup"
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
          type="text"
          label="Class Name"
          name="className"
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
