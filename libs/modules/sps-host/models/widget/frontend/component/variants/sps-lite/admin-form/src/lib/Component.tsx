"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-host/models/widget/frontend/api/client";
import { useForm } from "react-hook-form";
import { Form, CardContent, CardFooter } from "@sps/shared-ui-shadcn";
import { Button } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { invalidateServerTag } from "@sps/shared-frontend-client-store";
import { Component as AdminFormInputs } from "@sps/sps-host/models/widget/frontend/component/variants/sps-lite/admin-form-inputs";
import { variants } from "@sps/sps-host/models/widget/contracts/root";

const formSchema = z.object({
  title: z.string(),
  variant: z.enum(variants).default("default"),
  className: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      title: props.data?.title || "",
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
      // dispatch(api.rtk.util.invalidateTags(["widget"]));
      // invalidateServerTag({ tag: "widget" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      // router.refresh();
    }
  }, [updateEntity, createEntity]);

  return (
    <div
      data-module="sps-host"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <Form {...form}>
        <CardContent>
          <AdminFormInputs
            isServer={false}
            hostUrl={props.hostUrl}
            variant="admin-form-inputs"
            data={props.data}
            form={form}
          />
        </CardContent>
        <CardFooter>
          <Button
            ui="shadcn"
            variant="primary"
            size="lg"
            onClick={form.handleSubmit(onSubmit)}
          >
            {props.data?.id ? "Update" : "Create"}
          </Button>
        </CardFooter>
      </Form>
    </div>
  );
}
