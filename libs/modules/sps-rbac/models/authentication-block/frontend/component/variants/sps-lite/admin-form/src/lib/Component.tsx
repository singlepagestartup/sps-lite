"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-rbac/models/authentication-block/frontend/api/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-rbac/models/authentication-block/contracts/root";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";

const formSchema = z.object({
  variant: z.enum(variants),
  title: z.string(),
  className: z.string(),
  anchor: z.string(),
  description: z.string(),
  subtitle: z.string(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "login",
      title: props.data?.title || "",
      className: props.data?.className || "",
      anchor: props.data?.anchor || "",
      description: props.data?.description || "",
      subtitle: props.data?.subtitle || "",
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
      name="authentication-block"
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          label="Title"
          name="title"
          form={form}
          placeholder="Enter title"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Class Name"
          name="className"
          form={form}
          placeholder="Enter class name"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Anchor"
          name="anchor"
          form={form}
          placeholder="Enter anchor"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Description"
          name="description"
          form={form}
          placeholder="Enter description"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Subtitle"
          name="subtitle"
          form={form}
          placeholder="Enter subtitle"
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
      </div>
    </ParentAdminForm>
  );
}
