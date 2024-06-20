"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder/models/metadata/contracts/root";
import { Component as MetadataToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/relations/metadata-to-sps-file-storage-module-files/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="metadata"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
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
          label="Title"
          name="title"
          form={props.form}
          placeholder="Enter title"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Description"
          name="description"
          form={props.form}
          placeholder="Enter description"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Keywords"
          name="keywords"
          form={props.form}
          placeholder="Enter keywords"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Author"
          name="author"
          form={props.form}
          placeholder="Enter author"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Viewport"
          name="viewport"
          form={props.form}
          placeholder="Enter viewport"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Open Graph Title"
          name="opengraphTitle"
          form={props.form}
          placeholder="Enter open graph title"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Open Graph Description"
          name="opengraphDescription"
          form={props.form}
          placeholder="Enter open graph description"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Open Graph URL"
          name="opengraphUrl"
          form={props.form}
          placeholder="Enter open graph URL"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Open Graph Type"
          name="opengraphType"
          form={props.form}
          placeholder="Enter open graph type"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Open Graph Site Name"
          name="opengraphSiteName"
          form={props.form}
          placeholder="Enter open graph site name"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Open Graph Locale"
          name="opengraphLocale"
          form={props.form}
          placeholder="Enter open graph locale"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Twitter Card"
          name="twitterCard"
          form={props.form}
          placeholder="Enter twitter card"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Twitter Site"
          name="twitterSite"
          form={props.form}
          placeholder="Enter twitter site"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Twitter Creator"
          name="twitterCreator"
          form={props.form}
          placeholder="Enter twitter creator"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Twitter Title"
          name="twitterTitle"
          form={props.form}
          placeholder="Enter twitter title"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Twitter Description"
          name="twitterDescription"
          form={props.form}
          placeholder="Enter twitter description"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Twitter URL"
          name="twitterUrl"
          form={props.form}
          placeholder="Enter twitter URL"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Twitter Domain"
          name="twitterDomain"
          form={props.form}
          placeholder="Enter twitter domain"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Twitter App Country"
          name="twitterAppCountry"
          form={props.form}
          placeholder="Enter twitter app country"
        />
        <ModelEntitiesListCard title="metadata-to-sps-file-storage-module-files">
          <div className="flex flex-col gap-6">
            {props.data?.metadataToSpsFileStorageModuleFiles.map(
              (entity, index) => {
                return (
                  <MetadataToSpsFileStorageModuleFiles
                    key={index}
                    data={entity}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="select-right"
                  />
                );
              },
            )}
            <MetadataToSpsFileStorageModuleFiles
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              metadataId={props.data?.id}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
