"use client";

import { IComponentPropsExtended, variant } from "./interface";
import {
  IModel,
  variants,
  insertSchema,
} from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/sdk/model";
import { api } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/sdk/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/singlepage/admin-form/Component";
import { Component as HeroSectionBlockAdminSlectInput } from "@sps/sps-website-builder/models/hero-section-block/frontend/component";
import { Component as SpsFileStorageModuleWidgetArrayAdminSelectInput } from "@sps/sps-file-storage/models/widget/frontend/component";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      orderIndex: props.data?.orderIndex || 0,
      className: props.data?.className || "",
      heroSectionBlockId: props.data?.heroSectionBlockId || "",
      spsFileStorageModuleWidgetId:
        props.data?.spsFileStorageModuleWidgetId || "",
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
    <ParentAdminForm<IModel, typeof variant>
      {...props}
      module="sps-website-builder"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="hero-section-blocks-to-sps-file-storage-module-widgets"
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

        <HeroSectionBlockAdminSlectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="heroSectionBlockId"
          form={form}
        />

        <SpsFileStorageModuleWidgetArrayAdminSelectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="spsFileStorageModuleWidgetId"
          form={form}
        />
      </div>
    </ParentAdminForm>
  );
}
