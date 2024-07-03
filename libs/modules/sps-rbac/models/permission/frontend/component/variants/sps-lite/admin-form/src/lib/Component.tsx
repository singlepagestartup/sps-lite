"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-rbac/models/permission/frontend/api/client";
import { useForm } from "react-hook-form";
import { Form, Card, CardContent } from "@sps/shared-ui-shadcn";
import { Button } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { invalidateServerTag } from "@sps/shared-frontend-client-store";
import { Component as AdminFormInputs } from "@sps/sps-rbac/models/permission/frontend/component/variants/sps-lite/admin-form-inputs";
import {
  variants,
  types,
  methods,
} from "@sps/sps-rbac/models/permission/contracts/root";

const formSchema = z.object({
  variant: z.enum(variants),
  type: z.enum(types),
  method: z.enum(methods),
  path: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      type: props.data?.type || "http",
      method: props.data?.method || "GET",
      path: props.data?.path || "/",
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
      // dispatch(api.rtk.util.invalidateTags(["permission"]));
      // invalidateServerTag({ tag: "permission" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      router.refresh();
    }
  }, [updateEntity, createEntity]);

  return (
    <div
      data-module="sps-rbac"
      data-model="permission"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} permission
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
            <AdminFormInputs
              isServer={false}
              hostUrl={props.hostUrl}
              variant="admin-form-inputs"
              data={props.data}
              form={form}
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
