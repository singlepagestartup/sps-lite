import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-slide-contracts";
import { Component as SlidesToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-slides-to-sps-file-storage-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="slide"
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
          label="Subtitle"
          name="subtitle"
          form={props.form}
          placeholder="Type subtitle"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Description"
          name="description"
          form={props.form}
          placeholder="Type description"
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
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />
        <ModelEntitiesListCard title="slides-to-sps-file-storage-modules-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.slidesToSpsFileStorageWidgets.map((entity, index) => {
              return (
                <SlidesToSpsFileStorageWidgets
                  key={index}
                  isServer={props.isServer}
                  variant="select-right"
                  data={entity}
                />
              );
            })}
            <SlidesToSpsFileStorageWidgets
              isServer={props.isServer}
              variant="select-right"
              slideId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
