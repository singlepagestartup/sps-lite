"use client";

import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-rbac/models/role/sdk/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants, insertSchema } from "@sps/sps-rbac/models/role/sdk/model";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/singlepage/admin/admin-form/Component";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      title: props.data?.title || "",
      uid: props.data?.uid || "",
      availableOnRegistration: props.data?.availableOnRegistration || false,
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
      name="role"
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
          label="Uid"
          name="uid"
          form={form}
          placeholder="Type uid"
        />

        <FormField
          ui="shadcn"
          type="checkbox"
          label="Available on registration"
          name="availableOnRegistration"
          form={form}
          placeholder="Available on registration"
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

        {props.subjectsToRoles
          ? props.subjectsToRoles({
              data: props.data,
              hostUrl: props.hostUrl,
              isServer: props.isServer,
            })
          : null}
      </div>
    </ParentAdminForm>
  );
}
