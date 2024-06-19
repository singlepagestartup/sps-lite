"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent } from "@sps/shadcn";
import { z } from "zod";
import { FormField, ModelEntityCard } from "@sps/ui-adapter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-host-relations-widgets-to-external-modules-frontend-api-client";
import {
  variants,
  externalModules,
} from "@sps/sps-host-relations-widgets-to-external-modules-contracts";

const formSchema = z.object({
  widgetId: z.string().min(1),
  externalModuleId: z.string().min(1),
  variant: z.enum(variants).default("default"),
  externalModule: z.enum(externalModules).default("sps-website-builder"),
  className: z.string().optional(),
  orderIndex: z.number().default(0),
  externalModuleProps: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      widgetId: props.data?.widgetId || props.widgetId,
      externalModule: props.data?.externalModule || "sps-website-builder",
      className: props.data?.className || "",
      orderIndex: props.data?.orderIndex || 0,
      variant: props.data?.variant || "default",
      externalModuleProps: props.data?.externalModuleProps || "",
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.widgetId || !data.externalModuleId) {
      return;
    }

    if (props.data?.id) {
      await updateEntity({
        id: props.data.id,
        data,
      });

      return;
    }

    await createEntity({
      data,
    });
  }

  useActionTrigger({
    storeName: "sps-host/widgets",
    actionFilter: (action) => {
      return action.type === "widgets/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("widgetId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-host"
      data-relation="widgets-to-external-modules"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full"
    >
      {props.data ? (
        <ModelEntityCard
          onDeleteEntity={() => {
            if (props.data?.id) {
              deleteEntity({ id: props.data.id });
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
              type="select"
              label="External module"
              name="executeMutation"
              form={form}
              placeholder="Select external module"
              options={externalModules.map((externalModule) => [
                externalModule,
                externalModule,
              ])}
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
              label="External module props"
              name="externalModuleProps"
              form={form}
              placeholder="Type external module props"
            />
            <FormField
              ui="shadcn"
              type="number"
              label="Order index"
              name="orderIndex"
              form={form}
              placeholder="Type order index"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from external-modules
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
            <FormField
              ui="shadcn"
              type="select"
              label="External module"
              name="executeMutation"
              form={form}
              placeholder="Select external module"
              options={externalModules.map((externalModule) => [
                externalModule,
                externalModule,
              ])}
            />
            <FormField
              ui="shadcn"
              type="text"
              label="External module props"
              name="externalModuleProps"
              form={form}
              placeholder="Type external module props"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
