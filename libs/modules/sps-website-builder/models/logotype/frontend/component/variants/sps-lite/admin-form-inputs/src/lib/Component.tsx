import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-logotype-contracts";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="logotype"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Type title"
          options={variants.map((variant) => [variant, variant])}
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Url"
          name="url"
          form={props.form}
          placeholder="Type url"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Class name"
          name="className"
          form={props.form}
          placeholder="Type class name"
        />
      </div>
    </div>
  );
}
