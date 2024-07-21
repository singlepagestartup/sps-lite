"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import {
  variants,
  insertSchema,
} from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/sdk/model";
import {
  api,
  queryClient,
} from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/sdk/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as SlideAdminSlectInput } from "@sps/sps-website-builder/models/slide/frontend/component";
import { Component as ButtonsArrayAdminSelectInput } from "@sps/sps-website-builder/models/buttons-array/frontend/component";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      className: props.data?.className || "",
      orderIndex: props.data?.orderIndex || 0,
      slideId: props.data?.slideId || "",
      buttonsArrayId: props.data?.buttonsArrayId || "",
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
      name="slides-to-buttons-arrays"
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

        <SlideAdminSlectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="slideId"
          form={form}
        />

        <ButtonsArrayAdminSelectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="buttonsArrayId"
          form={form}
        />
      </div>
    </ParentAdminForm>
  );
}
