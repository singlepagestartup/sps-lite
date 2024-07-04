"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder/models/button/frontend/api/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-website-builder/models/button/contracts/root";
import { FormField } from "@sps/ui-adapter";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as ButtonsArraysToButtonsAdminTable } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/variants/sps-lite/admin-table";

const formSchema = z.object({
  variant: z.enum(variants),
  title: z.string(),
  url: z.string(),
  className: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      title: props.data?.title || "",
      url: props.data?.url || "",
      className: props.data?.className || "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
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
      // dispatch(api.rtk.util.invalidateTags(["button"]));
      // invalidateServerTag({ tag: "button" }).then(() => {
      //   router.refresh();
      // });
    }
  }, [updateEntity, createEntity]);

  return (
    <ParentAdminForm
      module="sps-website-builder"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="button"
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
          name="url"
          label="Url"
          form={form}
          placeholder="Type url"
        />

        <FormField
          ui="shadcn"
          type="text"
          name="className"
          label="Class Name"
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
          <ButtonsArraysToButtonsAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "buttonId",
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
