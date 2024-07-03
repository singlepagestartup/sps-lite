"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder/models/features-section-block/frontend/api/client";
import { useForm } from "react-hook-form";
import { Form, Card, CardContent } from "@sps/shared-ui-shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-website-builder/models/features-section-block/contracts/root";
import { Button, FormField } from "@sps/ui-adapter";

const formSchema = z.object({
  variant: z.enum(variants),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  className: z.string().optional(),
  anchor: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      title: props.data?.title || "",
      subtitle: props.data?.subtitle || "",
      description: props.data?.description || "",
      className: props.data?.className || "",
      anchor: props.data?.anchor || "",
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
      //
    }
  }, [updateEntity, createEntity]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="features-section-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} features-section-block
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
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
                label="Subtitle"
                name="subtitle"
                form={form}
                placeholder="Enter subtitle"
              />

              <FormField
                ui="shadcn"
                type="tiptap"
                label="Description"
                name="description"
                form={form}
                placeholder="Type description"
              />

              <FormField
                ui="shadcn"
                type="text"
                label="Class name"
                name="className"
                form={form}
                placeholder="Enter class name"
              />

              <FormField
                ui="shadcn"
                type="text"
                label="Anchor"
                name="anchor"
                form={form}
                placeholder="Enter anchor"
              />

              <FormField
                ui="shadcn"
                type="select"
                label="Variant"
                name="variant"
                form={form}
                placeholder="Type title"
                options={variants.map((variant) => [variant, variant])}
              />
            </div>
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
