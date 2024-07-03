"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-rbac/models/identity/frontend/api/client";
import { useForm } from "react-hook-form";
import { Form, Card, CardContent } from "@sps/shared-ui-shadcn";
import { Button, FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  variants,
  providers,
} from "@sps/sps-rbac/models/identity/contracts/root";

const formSchema = z.object({
  variant: z.enum(variants),
  password: z.string(),
  account: z.string(),
  email: z.string(),
  provider: z.enum(providers).default("login_and_password"),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      password: props.data?.password || "",
      account: props.data?.account || "",
      email: props.data?.email || "",
      provider: props.data?.provider || "login_and_password",
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
      data-module="sps-rbac"
      data-model="identity"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} identity
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
            <div className="flex flex-col gap-6">
              <FormField
                ui="shadcn"
                type="text"
                label="Account"
                name="account"
                form={form}
                placeholder="Enter account"
              />
              <FormField
                ui="shadcn"
                type="text"
                label="Email"
                name="email"
                form={form}
                placeholder="Enter email"
              />
              <FormField
                ui="shadcn"
                type="password"
                label="Password"
                name="password"
                form={form}
                placeholder="Enter password"
              />
              <FormField
                ui="shadcn"
                type="select"
                label="Provider"
                name="provider"
                form={form}
                placeholder="Select provider"
                options={providers.map((provider) => [provider, provider])}
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
