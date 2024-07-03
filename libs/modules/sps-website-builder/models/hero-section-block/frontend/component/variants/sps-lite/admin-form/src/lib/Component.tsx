"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder/models/hero-section-block/frontend/api/client";
import { useForm } from "react-hook-form";
import { Form, Card, CardContent } from "@sps/shared-ui-shadcn";
import { Button, FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-website-builder/models/hero-section-block/contracts/root";

const formSchema = z.object({
  variant: z.enum(variants),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  className: z.string().optional(),
  anchor: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const update = api.update({
    id: props.data?.id,
  });
  const create = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: props.data?.title || "",
      subtitle: props.data?.subtitle || "",
      variant: props.data?.variant || "default",
      description: props.data?.description || "",
      className: props.data?.className || "",
      anchor: props.data?.anchor || "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (props.data?.id) {
      update.mutate({
        id: props.data.id,
        data,
      });
      return;
    }

    create.mutate({
      data,
    });
  }

  useEffect(() => {
    if (update.data || create.data) {
      //
    }
  }, [update.data, create.data]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} hero-section-block
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
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
                name="anchor"
                label="Anchor"
                form={form}
                placeholder="Type anchor"
              />
              <FormField
                ui="shadcn"
                type="text"
                name="subtitle"
                label="Subitle"
                form={form}
                placeholder="Type subtitle"
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
                name="className"
                label="Class name"
                form={form}
                placeholder="Type class name"
              />
              <FormField
                ui="shadcn"
                type="text"
                name="className"
                label="Class name"
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
