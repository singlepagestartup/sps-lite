"use client";

import { IComponentPropsExtended, variant } from "./interface";
import {
  IRelation,
  variants,
  insertSchema,
} from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/sdk/model";
import { api } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/sdk/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/singlepage/admin-form/Component";
import { Component as WidgetSelectInput } from "@sps/sps-rbac/models/widget/frontend/component";
import { Component as AuthenticationBlockSelectInput } from "@sps/sps-rbac/models/authentication-block/frontend/component";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      orderIndex: props.data?.orderIndex || 0,
      className: props.data?.className || "",
      widgetId: props.data?.widgetId || "",
      authenticationBlockId: props.data?.authenticationBlockId || "",
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
    <ParentAdminForm<IRelation, typeof variant>
      {...props}
      module="sps-rbac"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="widgets-to-authentication-blocks"
      type="relation"
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="number"
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

        <WidgetSelectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="widgetId"
          form={form}
        />

        <AuthenticationBlockSelectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="authenticationBlockId"
          form={form}
        />
      </div>
    </ParentAdminForm>
  );
}
