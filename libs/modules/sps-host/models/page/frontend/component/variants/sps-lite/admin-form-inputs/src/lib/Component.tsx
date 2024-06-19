"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-host-models-page-contracts";
import { Component as PagesToLayouts } from "@sps/sps-host-relations-pages-to-layouts-frontend-component";
import { Component as PagesToWidgets } from "@sps/sps-host-relations-pages-to-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-model="page"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
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
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Type title"
          options={variants.map((variant) => [variant, variant])}
        />
        <ModelEntitiesListCard title="pages-to-widgets">
          <div className="flex flex-col gap-6">
            {props.data?.pagesToWidgets.map((entity, index) => {
              return (
                <PagesToWidgets
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  pageId={props.data?.id}
                  data={entity}
                />
              );
            })}
            <PagesToWidgets
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              pageId={props.data?.id}
              data={undefined}
            />
          </div>
        </ModelEntitiesListCard>
        <ModelEntitiesListCard title="pages-to-layouts">
          <div className="flex flex-col gap-6">
            {props.data?.pagesToLayouts.map((entity, index) => {
              return (
                <PagesToLayouts
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="select-right"
                  pageId={props.data?.id}
                  data={entity}
                />
              );
            })}
            <PagesToLayouts
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="select-right"
              pageId={props.data?.id}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
