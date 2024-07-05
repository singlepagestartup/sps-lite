"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { route } from "@sps/sps-rbac/relations/roles-to-permissions/frontend/api/model";
import {
  api,
  queryClient,
} from "@sps/sps-rbac/relations/roles-to-permissions/frontend/api/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-rbac/relations/roles-to-permissions/contracts/root";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as RoleSelectInput } from "@sps/sps-rbac/models/role/frontend/component/variants/sps-lite/admin-select-input";
import { Component as PermissionSelectInput } from "@sps/sps-rbac/models/permission/frontend/component/variants/sps-lite/admin-select-input";

const formSchema = z.object({
  variant: z.enum(variants),
  orderIndex: z.number().optional(),
  className: z.string().optional(),
  roleId: z.string().optional(),
  permissionId: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      orderIndex: props.data?.orderIndex || 0,
      className: props.data?.className || "",
      roleId: props.data?.roleId || "",
      permissionId: props.data?.permissionId || "",
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
      const id = updateEntity.data?.id || createEntity.data?.id;

      queryClient.invalidateQueries({
        queryKey: [`${route}/${id}`],
      });
    }
  }, [updateEntity, createEntity]);

  return (
    <ParentAdminForm
      module="sps-rbac"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="roles-to-permissions"
      type="relation"
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          label="Order index"
          name="orderIndex"
          form={form}
          placeholder="Order index"
        />

        <FormField
          ui="shadcn"
          type="text"
          label="Class name"
          name="className"
          form={form}
          placeholder="Class name"
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

        <RoleSelectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="roleId"
          form={form}
        />

        <PermissionSelectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="permissionId"
          form={form}
        />
      </div>
    </ParentAdminForm>
  );
}
