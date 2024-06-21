"use client";

import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder/models/feature/contracts/root";
import { Component as FeaturesToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
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
          label="Subtitle"
          name="subtitle"
          form={props.form}
          placeholder="Enter subtitle"
        />

        <FormField
          ui="shadcn"
          type="tiptap"
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
          placeholder="Enter class name"
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
        <ModelEntitiesListCard title="features-to-sps-file-storage-module-files">
          <div className="flex flex-col gap-6">
            {props.data?.featuresToSpsFileStorageModuleFiles.map(
              (entity, index) => {
                return (
                  <FeaturesToSpsFileStorageModuleFiles
                    key={index}
                    data={entity}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="select-right"
                  />
                );
              },
            )}
            <FeaturesToSpsFileStorageModuleFiles
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              featureId={props.data?.id}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
