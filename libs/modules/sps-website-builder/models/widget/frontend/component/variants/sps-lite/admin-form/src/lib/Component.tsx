"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, Form } from "@sps/shared-ui-shadcn";
import { z } from "zod";
import { route } from "@sps/sps-website-builder/models/widget/frontend/api/model";
import {
  api,
  queryClient,
} from "@sps/sps-website-builder/models/widget/frontend/api/client";
import { Button, FormField } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder/models/widget/contracts/root";

const formSchema = z.object({
  title: z.string(),
  variant: z.enum(variants).default("default"),
  className: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: props.data?.title || "",
      variant: props.data?.variant || "default",
      className: props.data?.className || "",
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
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} widget
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
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
          </CardContent>
          <div className="admin-edit-card-button-container">
            <Button ui="sps-admin" onClick={form.handleSubmit(onSubmit)}>
              {props.data?.id ? "Update" : "Create"}
            </Button>
          </div>
        </Card>
      </Form>
    </div>
  );
}
