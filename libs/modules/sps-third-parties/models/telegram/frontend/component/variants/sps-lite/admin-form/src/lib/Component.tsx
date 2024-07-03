"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-third-parties/models/telegram/frontend/api/client";
import { useForm } from "react-hook-form";
import { Form, Card, CardContent } from "@sps/shared-ui-shadcn";
import { Button, FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-third-parties/models/telegram/contracts/root";

const formSchema = z.object({
  variant: z.enum(variants),
  title: z.string().min(3).max(255),
  token: z.string().min(46).max(46),
  password: z.string().min(10).max(255),
  username: z.string().min(1),
  status: z.enum(["active", "inactive"]).default("active"),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      title: props.data?.title || "",
      token: props.data?.token || "",
      status: props.data?.status || "active",
      password: props.data?.password || "",
      username: props.data?.username || "",
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
      data-module="sps-third-parties"
      data-model="telegram"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} telegram
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
