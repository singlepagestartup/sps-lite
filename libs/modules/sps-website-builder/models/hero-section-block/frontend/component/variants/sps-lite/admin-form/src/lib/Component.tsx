"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder/models/hero-section-block/frontend/api/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-website-builder/models/hero-section-block/contracts/root";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as HeroSectionBlocksToButtonsArraysAdminTable } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/frontend/component/variants/sps-lite/admin-table";
import { Component as WidgetsToHeroSectionBlocksAdminTable } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component/variants/sps-lite/admin-table";

const formSchema = z.object({
  variant: z.enum(variants),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  className: z.string().optional(),
  anchor: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const update = api.update({
    id: props.data?.id,
  });
  const create = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: props.data?.title || "",
      subtitle: props.data?.subtitle || "",
      variant: props.data?.variant || "default",
      description: props.data?.description || "",
      className: props.data?.className || "",
      anchor: props.data?.anchor || "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (props.data?.id) {
      update.mutate({
        id: props.data.id,
        data,
      });
      return;
    }

    create.mutate({
      data,
    });
  }

  useEffect(() => {
    if (update.data || create.data) {
      //
    }
  }, [update.data, create.data]);

  return (
    <ParentAdminForm
      module="sps-website-builder"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="hero-section-block"
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
          name="anchor"
          label="Anchor"
          form={form}
          placeholder="Type anchor"
        />

        <FormField
          ui="shadcn"
          type="text"
          name="subtitle"
          label="Subitle"
          form={form}
          placeholder="Type subtitle"
        />

        <FormField
          ui="shadcn"
          type="tiptap"
          label="Description"
          name="description"
          form={form}
          placeholder="Type description"
        />

        <FormField
          ui="shadcn"
          type="text"
          name="className"
          label="Class name"
          form={form}
          placeholder="Type class name"
        />

        <FormField
          ui="shadcn"
          type="text"
          name="className"
          label="Class name"
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
          <HeroSectionBlocksToButtonsArraysAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "heroSectionBlockId",
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
                      column: "heroSectionBlockId",
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
