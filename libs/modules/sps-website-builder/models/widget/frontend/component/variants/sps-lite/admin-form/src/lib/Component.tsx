"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IComponentPropsExtended } from "./interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
} from "@sps/shadcn";
import { useActionTrigger } from "@sps/hooks";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/store";
import { api } from "@sps/sps-website-builder-models-widget-frontend-api-client";
import { Component as WidgetSpsLiteAdminFormInputs } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-form-inputs";

const formSchema = z.object({});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [updateLayout, updateLayoutResult] = api.rtk.useUpdateMutation();
  const [createLayout, createLayoutResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  useActionTrigger({
    storeName: "sps-website-builder/pages",
    actionFilter: (action) => {
      return action.type === "pages/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      await form.trigger().then((isValid) => {
        if (isValid) {
          form.handleSubmit(onSubmit)();
        }
      });
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (props.data?.id) {
      await updateLayout({ id: props.data?.id, data });
      return;
    }

    await createLayout({
      data,
    });
    await invalidateServerTag({ tag: "widget" });
  }

  useEffect(() => {
    if (updateLayoutResult.data || createLayoutResult.data) {
      dispatch(api.rtk.util.invalidateTags(["widget"]));
      invalidateServerTag({ tag: "widget" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      router.refresh();
    }
  }, [updateLayoutResult, createLayoutResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card>
          <CardHeader>
            <CardTitle>{props.data?.id ? "Edit" : "Create"} Widget</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <WidgetSpsLiteAdminFormInputs
              isServer={false}
              variant="admin-form-inputs"
              form={form}
            />
            <Button variant="primary" onClick={form.handleSubmit(onSubmit)}>
              {props.data?.id ? "Update" : "Create"}
            </Button>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
}
