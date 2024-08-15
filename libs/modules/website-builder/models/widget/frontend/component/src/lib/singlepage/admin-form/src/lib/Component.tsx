"use client";

import { IComponentPropsExtended, variant, IModel } from "./interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  variants,
  insertSchema,
} from "@sps/website-builder/models/widget/sdk/model";
import { api } from "@sps/website-builder/models/widget/sdk/client";
import { FormField } from "@sps/ui-adapter";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/singlepage/admin-form/Component";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      title: props.data?.title || "",
      variant: props.data?.variant || "default",
      className: props.data?.className || "",
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
      module="website-builder"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="widget"
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          name="title"
          label="Title"
          form={form}
          placeholder="Type title"
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
          type="select"
          label="Variant"
          name="variant"
          form={form}
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />

        {props.widgetsToButtonsArrays
          ? props.widgetsToButtonsArrays({
              data: props.data,
              hostUrl: props.hostUrl,
              isServer: props.isServer,
            })
          : null}

        {props.widgetsToFeatures
          ? props.widgetsToFeatures({
              data: props.data,
              hostUrl: props.hostUrl,
              isServer: props.isServer,
            })
          : null}

        {props.widgetsToFileStorageModuleWidgets
          ? props.widgetsToFileStorageModuleWidgets({
              data: props.data,
              hostUrl: props.hostUrl,
              isServer: props.isServer,
            })
          : null}

        {props.widgetsToLogotypes
          ? props.widgetsToLogotypes({
              data: props.data,
              hostUrl: props.hostUrl,
              isServer: props.isServer,
            })
          : null}

        {props.widgetsToSliders
          ? props.widgetsToSliders({
              data: props.data,
              hostUrl: props.hostUrl,
              isServer: props.isServer,
            })
          : null}
      </div>
    </ParentAdminForm>
  );
}
