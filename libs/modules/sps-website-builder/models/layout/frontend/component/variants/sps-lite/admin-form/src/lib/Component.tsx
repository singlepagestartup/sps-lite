"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-layout-frontend-api-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, Form } from "@sps/shadcn";
import { Button } from "@sps/ui-adapter";
import { useActionTrigger } from "@sps/hooks";
import { z } from "zod";
import { variants } from "@sps/sps-website-builder-models-layout-contracts";
import { Component as LayoutSpsLiteAdminFormInputs } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-form-inputs";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/store";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  variant: z.string().refine((value) => {
    return variants.includes(value as any);
  }),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [updateLayout, updateLayoutResult] = api.rtk.useUpdateMutation();
  const [createLayout, createLayoutResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: props.data?.title || "",
      variant: props.data?.variant || "default",
    },
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
    await invalidateServerTag({ tag: "page" });
  }

  useEffect(() => {
    if (updateLayoutResult.data || createLayoutResult.data) {
      dispatch(api.rtk.util.invalidateTags(["layout"]));
      invalidateServerTag({ tag: "page" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      router.refresh();
    }
  }, [updateLayoutResult, createLayoutResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} layout
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
            <LayoutSpsLiteAdminFormInputs
              isServer={false}
              hostUrl={props.hostUrl}
              variant="admin-form-inputs"
              variants={variants}
              form={form}
              data={props.data}
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
