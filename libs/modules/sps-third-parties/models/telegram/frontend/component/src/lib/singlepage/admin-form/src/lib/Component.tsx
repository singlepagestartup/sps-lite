"use client";

import { IComponentPropsExtended, variant, IModel } from "./interface";
import { api } from "@sps/sps-third-parties/models/telegram/sdk/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  variants,
  insertSchema,
} from "@sps/sps-third-parties/models/telegram/sdk/model";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/singlepage/admin-form/Component";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      title: props.data?.title || "",
      token: props.data?.token || "",
      status: props.data?.status || "active",
      password: props.data?.password || "",
      username: props.data?.username || "",
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
      name="telegram"
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="text"
          label="Title"
          name="title"
          form={form}
          placeholder="Enter title"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Token"
          name="token"
          form={form}
          placeholder="Enter token"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Password"
          name="password"
          form={form}
          placeholder="Enter launch password"
        />
        <FormField
          ui="shadcn"
          type="text"
          label="Username"
          name="username"
          form={form}
          placeholder="Enter bot username in @format"
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Status"
          name="status"
          form={form}
          placeholder="Select status"
          options={[
            ["active", "Active"],
            ["inactive", "Inactive"],
          ]}
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
      </div>
    </ParentAdminForm>
  );
}
