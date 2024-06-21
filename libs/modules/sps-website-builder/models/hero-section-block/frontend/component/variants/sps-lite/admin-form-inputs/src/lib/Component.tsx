"use client";

import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder/models/hero-section-block/contracts/root";
import { Component as HeroSectionsToButtonsArraysSpsLiteSelectRight } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/frontend/component/variants/sps-lite/select-right";
import { Component as HeroSectionBlocksToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/frontend/component/variants/sps-lite/select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <form
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || "flex flex-col gap-6"}`}
    >
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
        name="anchor"
        label="Anchor"
        form={props.form}
        placeholder="Type anchor"
      />
      <FormField
        ui="shadcn"
        type="text"
        name="subtitle"
        label="Subitle"
        form={props.form}
        placeholder="Type subtitle"
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
        name="className"
        label="Class name"
        form={props.form}
        placeholder="Type class name"
      />
      <FormField
        ui="shadcn"
        type="text"
        name="className"
        label="Class name"
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
      <ModelEntitiesListCard title="hero-section-block-to-buttons-arrays">
        <div className="flex flex-col gap-6">
          {props.data?.heroSectionBlocksToButtonsArrays.map((entity, index) => {
            return (
              <HeroSectionsToButtonsArraysSpsLiteSelectRight
                key={index}
                data={entity}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="select-right"
              />
            );
          })}
          <HeroSectionsToButtonsArraysSpsLiteSelectRight
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="select-right"
            heroSectionBlockId={props.data?.id}
          />
        </div>
      </ModelEntitiesListCard>
      <ModelEntitiesListCard title="hero-section-block-to-sps-file-storage-widgets">
        <div className="flex flex-col gap-6">
          {props.data?.heroSectionBlocksToSpsFileStorageWidgets.map(
            (entity, index) => {
              return (
                <HeroSectionBlocksToSpsFileStorageWidgets
                  key={index}
                  data={entity}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                />
              );
            },
          )}
          <HeroSectionBlocksToSpsFileStorageWidgets
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="select-right"
          />
        </div>
      </ModelEntitiesListCard>
    </form>
  );
}
