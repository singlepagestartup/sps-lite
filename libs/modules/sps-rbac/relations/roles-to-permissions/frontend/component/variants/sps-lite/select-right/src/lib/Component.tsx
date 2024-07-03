"use client";

import { IComponentPropsExtended } from "./interface";
import { Card, CardContent } from "@sps/shared-ui-shadcn";
import { z } from "zod";
import { FormField, ModelEntityCard } from "@sps/ui-adapter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/shared-frontend-hooks";
import { api } from "@sps/sps-rbac/relations/roles-to-permissions/frontend/api/client";
import { Component as AdminSelectInput } from "@sps/sps-rbac/models/permission/frontend/component/root";
import { variants } from "@sps/sps-rbac/relations/roles-to-permissions/contracts/root";

const formSchema = z.object({
  roleId: z.string().min(1),
  permissionId: z.string().min(1),
  variant: z.enum(variants).default("default"),
  className: z.string().optional(),
  orderIndex: z.number().default(0),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();
  const deleteEntity = api.delete();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      roleId: props.data?.roleId || props.roleId,
      permissionId: props.data?.permissionId,
      className: props.data?.className || "",
      orderIndex: props.data?.orderIndex || 0,
      variant: props.data?.variant || "default",
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.roleId || !data.permissionId) {
      return;
    }

    if (props.data?.id) {
      updateEntity.mutate({
        id: props.data.id,
        data,
      });

      return;
    }

    createEntity.mutate({
      data,
    });
  }

  useActionTrigger({
    storeName: "sps-rbac/role",
    actionFilter: (action) => {
      return action.type === "role/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("roleId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-rbac"
      data-relation="roles-to-permissions"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full"
    >
      {props.data ? (
        <ModelEntityCard
          onDeleteEntity={() => {
            if (props.data?.id) {
              deleteEntity.mutate({ id: props.data.id });
            }
          }}
          data={props.data}
        >
          <div className="flex flex-col col-span-3 gap-0.5">
            <FormField
              ui="shadcn"
              type="select"
              label="Variant"
              name="variant"
              form={form}
              placeholder="Select variant of relation"
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
              type="number"
              label="Order index"
              name="orderIndex"
              form={form}
              placeholder="Type order index"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="permissionId"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from permissions
          </h3>
          <CardContent className="flex flex-col gap-6">
            <FormField
              ui="shadcn"
              type="select"
              label="Variant"
              name="variant"
              form={form}
              placeholder="Select variant of relation"
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
              type="number"
              label="Order index"
              name="orderIndex"
              form={form}
              placeholder="Type order index"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="permissionId"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
