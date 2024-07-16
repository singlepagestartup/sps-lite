"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { route } from "@sps/sps-host/relations/widgets-to-external-modules/frontend/api/model";
import {
  api,
  queryClient,
} from "@sps/sps-host/relations/widgets-to-external-modules/frontend/api/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  variants,
  externalModules,
} from "@sps/sps-host/relations/widgets-to-external-modules/contracts/root";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as WidgetSelectInput } from "@sps/sps-host/models/widget/frontend/component/variants/sps-lite/admin-select-input";

const formSchema = z.object({
  variant: z.enum(variants),
  orderIndex: z.number().optional(),
  className: z.string().optional(),
  widgetId: z.string().optional(),
  externalModule: z.enum(externalModules).default("sps-website-builder"),
  externalModuleProps: z.string().optional(),
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
      widgetId: props.data?.widgetId || "",
      externalModule: props.data?.externalModule || "sps-website-builder",
      externalModuleProps: props.data?.externalModuleProps || "{}",
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
      module="sps-host"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="widgets-to-external-modules"
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

        <FormField
          ui="shadcn"
          type="select"
          label="External module"
          name="externalModule"
          form={form}
          placeholder="Select external module"
          options={externalModules.map((module) => [module, module])}
        />

        <FormField
          ui="shadcn"
          type="text"
          label="External module props"
          name="externalModuleProps"
          form={form}
          placeholder="External module props"
        />

        <WidgetSelectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="widgetId"
          form={form}
        />
      </div>
    </ParentAdminForm>
  );
}
