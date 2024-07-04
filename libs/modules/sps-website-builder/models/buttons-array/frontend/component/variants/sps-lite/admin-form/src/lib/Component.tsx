"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder/models/buttons-array/frontend/api/client";
import { useForm } from "react-hook-form";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-website-builder/models/buttons-array/contracts/root";
import { Component as ButtonsArraysToButtonsAdminTableRow } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/variants/sps-lite/admin-table-row";
import { Component as ButtonsArraysToButtonsAdminForm } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/variants/sps-lite/admin-form";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";

const formSchema = z.object({
  variant: z.enum(variants),
  title: z.string().optional(),
  className: z.string().optional(),
  description: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      title: props.data?.title || "",
      className: props.data?.className || "",
      description: props.data?.description || "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (props.data?.id) {
      await updateEntity.mutate({ id: props.data?.id, data });
      return;
    }

    await createEntity.mutate({
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
      variant="admin-form"
      name="buttons-array"
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
          type="select"
          label="Variant"
          name="variant"
          form={form}
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
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
          type="text"
          label="Description"
          name="description"
          form={form}
          placeholder="Type description"
        />

        <ModelEntitiesListCard
          adminForm={
            <ButtonsArraysToButtonsAdminForm
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="admin-form"
            />
          }
          title="buttons-arrays-to-buttons"
        >
          {props.data?.buttonsArraysToButtons.map((entity, index) => {
            return (
              <ButtonsArraysToButtonsAdminTableRow
                key={index}
                data={entity}
                hostUrl={props.hostUrl}
                isServer={false}
                variant="admin-table-row"
              />
            );
          })}
        </ModelEntitiesListCard>
      </div>
    </ParentAdminForm>
  );
}
