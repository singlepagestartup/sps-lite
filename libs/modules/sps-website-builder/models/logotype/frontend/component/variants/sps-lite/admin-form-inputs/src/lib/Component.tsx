import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-logotype-contracts";
import { Component as LogotypesToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-logotypes-to-sps-file-storage-widgets-frontend-component";

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
        <ModelEntitiesListCard title="logotypes-to-sps-file-storage-modules-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.logotypesToSpsFileStorageWidgets.map(
              (entity, index) => {
                return (
                  <LogotypesToSpsFileStorageWidgets
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={entity}
                  />
                );
              },
            )}
            <LogotypesToSpsFileStorageWidgets
              isServer={props.isServer}
              variant="select-right"
              logotypeId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
