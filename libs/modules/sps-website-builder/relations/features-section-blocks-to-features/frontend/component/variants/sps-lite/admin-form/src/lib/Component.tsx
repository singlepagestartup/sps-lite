"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { route } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/frontend/api/model";
import {
  api,
  queryClient,
} from "@sps/sps-website-builder/relations/features-section-blocks-to-features/frontend/api/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/contracts/root";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as FeaturesSectionBlockAdminSlectInput } from "@sps/sps-website-builder/models/features-section-block/frontend/component/variants/sps-lite/admin-select-input";
import { Component as FeatureAdminSlectInput } from "@sps/sps-website-builder/models/feature/frontend/component/variants/sps-lite/admin-select-input";

const formSchema = z.object({
  variant: z.enum(variants),
  className: z.string().optional(),
  orderIndex: z.number().optional(),
  featuresSectionBlockId: z.string().optional(),
  featureId: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      className: props.data?.className || "",
      orderIndex: props.data?.orderIndex || 0,
      featuresSectionBlockId: props.data?.featuresSectionBlockId || "",
      featureId: props.data?.featureId || "",
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
      module="sps-website-builder"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="features-section-blocks-to-features"
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

        <FeaturesSectionBlockAdminSlectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-select-input"
          formFieldName="featuresSectionBlockId"
          form={form}
        />

        <FeatureAdminSlectInput
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          formFieldName="featureId"
          variant="admin-select-input"
          form={form}
        />
      </div>
    </ParentAdminForm>
  );
}
