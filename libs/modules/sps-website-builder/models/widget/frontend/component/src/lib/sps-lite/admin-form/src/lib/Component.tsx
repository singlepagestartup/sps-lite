"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  variants,
  insertSchema,
} from "@sps/sps-website-builder/models/widget/sdk/model";
import { api } from "@sps/sps-website-builder/models/widget/sdk/client";
import { FormField } from "@sps/ui-adapter";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as FootersToWidgetsAdminTable } from "@sps/sps-website-builder/relations/footers-to-widgets/frontend/component/variants/sps-lite/admin-table";
import { Component as NavbarsToWidgetsAdminTable } from "@sps/sps-website-builder/relations/navbars-to-widgets/frontend/component/variants/sps-lite/admin-table";
import { Component as WidgetsToFeaturesSectionBlocksAdminTable } from "@sps/sps-website-builder/relations/widgets-to-features-section-blocks/frontend/component/variants/sps-lite/admin-table";
import { Component as WidgetsToFooterBlocksAdminTable } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/frontend/component/variants/sps-lite/admin-table";
import { Component as WidgetsToHeroSectionBlocksAdminTable } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component";
import { Component as WidgetsToNavbarBlocksAdminTable } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/frontend/component/variants/sps-lite/admin-table";
import { Component as WidgetsToSliderBlocksAdminTable } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/frontend/component/variants/sps-lite/admin-table";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      title: props.data?.title || "",
      variant: props.data?.variant || "default",
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

  // useEffect(() => {
  //   if (updateEntity.data || createEntity.data) {
  //     const id = updateEntity.data?.id || createEntity.data?.id;

  //     queryClient.invalidateQueries({
  //       queryKey: [`${route}/${id}`],
  //     });
  //   }
  // }, [updateEntity, createEntity]);

  return (
    <ParentAdminForm
      module="sps-website-builder"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="widget"
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          name="title"
          label="Title"
          form={form}
          placeholder="Type title"
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
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />

        {props.data?.id ? (
          <FootersToWidgetsAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "widgetId",
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
          <NavbarsToWidgetsAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "widgetId",
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
          <WidgetsToFeaturesSectionBlocksAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "widgetId",
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
          <WidgetsToFooterBlocksAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "widgetId",
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
          <WidgetsToHeroSectionBlocksAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "widgetId",
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
          <WidgetsToNavbarBlocksAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "widgetId",
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
                      column: "widgetId",
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
