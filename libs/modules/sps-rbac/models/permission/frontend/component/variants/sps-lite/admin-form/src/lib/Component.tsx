"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-rbac/models/permission/frontend/api/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  variants,
  types,
  methods,
} from "@sps/sps-rbac/models/permission/contracts/root";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";

const formSchema = z.object({
  variant: z.enum(variants),
  type: z.enum(types),
  method: z.enum(methods),
  path: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      type: props.data?.type || "http",
      method: props.data?.method || "GET",
      path: props.data?.path || "/",
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
      name="permission"
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="select"
          label="Type"
          name="type"
          form={form}
          placeholder="Select type"
          options={types.map((type) => [type, type])}
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Method"
          name="method"
          form={form}
          placeholder="Select method"
          options={methods.map((method) => [method, method])}
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Path"
          name="path"
          form={form}
          placeholder="Enter path"
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
