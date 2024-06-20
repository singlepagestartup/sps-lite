"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder/models/buttons-array/contracts/root";
import { Component as ButtonsArraysToButtons } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="buttons-array"
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
          placeholder="Type title"
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

        <FormField
          ui="shadcn"
          type="text"
          label="Class name"
          name="className"
          form={props.form}
          placeholder="Type class name"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Description"
          name="description"
          form={props.form}
          placeholder="Type description"
        />

        <ModelEntitiesListCard title="buttons-arrays-to-buttons">
          <div className="flex flex-col gap-6">
            {props.data?.buttonsArraysToButtons.map((entity, index) => {
              return (
                <ButtonsArraysToButtons
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <ButtonsArraysToButtons
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
