"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { route } from "@sps/sps-rbac/relations/sessions-to-authentications/frontend/api/model";
import {
  api,
  queryClient,
} from "@sps/sps-rbac/relations/sessions-to-authentications/frontend/api/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-rbac/relations/sessions-to-authentications/contracts/root";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as SessionSelectInput } from "@sps/sps-rbac/models/session/frontend/component/variants/sps-lite/admin-select-input";
import { Component as AuthenticationSelectInput } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/admin-select-input";

const formSchema = z.object({
  variant: z.enum(variants),
  orderIndex: z.number().optional(),
  className: z.string().optional(),
  sessionId: z.string().optional(),
  authenticationId: z.string().optional(),
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
      sessionId: props.data?.sessionId || "",
      authenticationId: props.data?.authenticationId || "",
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
      name="sessions-to-authentications"
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

        <SessionSelectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="sessionId"
          form={form}
        />

        <AuthenticationSelectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="authenticationId"
          form={form}
        />
      </div>
    </ParentAdminForm>
  );
}
