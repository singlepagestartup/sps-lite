"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder/models/slider-block/sdk/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  variants,
  insertSchema,
} from "@sps/sps-website-builder/models/slider-block/sdk/model";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as SliderBlocksToSlidersAdminTable } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/frontend/component";
import { Component as WidgetsToSliderBlocksAdminTable } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/frontend/component";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      title: props.data?.title || "",
      subtitle: props.data?.subtitle || "",
      description: props.data?.description || "",
      anchor: props.data?.anchor || "",
      className: props.data?.className || "",
    },
  });

  async function onSubmit(data: z.infer<typeof insertSchema>) {
    if (props.data?.id) {
      updateEntity.mutate({ id: props.data?.id, data });
      return;
    }

    createEntity.mutate({
      data,
    });
  }

  useEffect(() => {
    if (updateEntity.data || createEntity.data) {
      //
    }
  }, [updateEntity, createEntity]);

  return (
    <ParentAdminForm
      module="sps-website-builder"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="slider-block"
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          label="Title"
          name="title"
          form={form}
          placeholder="Type title"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Subtitle"
          name="subtitle"
          form={form}
          placeholder="Type subtitle"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Description"
          name="description"
          form={form}
          placeholder="Type description"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Anchor"
          name="anchor"
          form={form}
          placeholder="Type anchor"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Class name"
          name="className"
          form={form}
          placeholder="Type class name"
        />

        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={form}
          placeholder="Type title"
          options={variants.map((variant) => [variant, variant])}
        />

        {props.data?.id ? (
          <SliderBlocksToSlidersAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "sliderBlockId",
                      method: "eq",
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          />
        ) : null}

        {props.data?.id ? (
          <WidgetsToSliderBlocksAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "sliderBlockId",
                      method: "eq",
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          />
        ) : null}
      </div>
    </ParentAdminForm>
  );
}
