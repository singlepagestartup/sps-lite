"use client";

import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-rbac/models/permission/sdk/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  variants,
  types,
  methods,
  insertSchema,
} from "@sps/sps-rbac/models/permission/sdk/model";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/singlepage/admin/admin-form/Component";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      type: props.data?.type || "http",
      method: props.data?.method || "get",
      path: props.data?.path || "/",
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
          options={types.map((type) => [type, type.toUpperCase()])}
        />

        <FormField
          ui="shadcn"
          type="select"
          label="Method"
          name="method"
          form={form}
          placeholder="Select method"
          options={methods.map((method) => [method, method.toUpperCase()])}
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

        {props.rolesToPermissions
          ? props.rolesToPermissions({
              data: props.data,
              hostUrl: props.hostUrl,
              isServer: props.isServer,
            })
          : null}
      </div>
    </ParentAdminForm>
  );
}
