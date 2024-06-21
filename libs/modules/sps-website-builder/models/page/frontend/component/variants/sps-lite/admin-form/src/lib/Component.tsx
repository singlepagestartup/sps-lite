"use client";

import React, { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder/models/page/frontend/api/client";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, Form } from "@sps/shared-ui-shadcn";
import { Button } from "@sps/ui-adapter";
import { useActionTrigger } from "@sps/shared-hooks";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/shared-store";
import { Component as PageSpsLiteAdminFormInputs } from "@sps/sps-website-builder/models/page/frontend/component/variants/sps-lite/admin-form-inputs";
import { variants } from "@sps/sps-website-builder/models/page/contracts/root";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  url: z.string().min(1),
  variant: z.enum(variants).default("default"),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const dispatch = useDispatch();
  const requiredActions = ["pages-to-layouts", "pages-to-widgets"];

  const [finishedActions, setFinishedActions] = useState<string[]>([]);

  useActionTrigger({
    storeName: "sps-website-builder/pages-to-layouts",
    actionFilter: (action) =>
      action.type === "pages-to-layouts/executeMutation/fulfilled",
    callbackFunction: async (action) => {
      setFinishedActions((prev) => [...prev, "pages-to-layouts"]);
    },
  });

  useActionTrigger({
    storeName: "sps-website-builder/pages-to-widgets",
    actionFilter: (action) =>
      action.type === "pages-to-widgets/executeMutation/fulfilled",
    callbackFunction: async (action) => {
      setFinishedActions((prev) => [...prev, "pages-to-widgets"]);
    },
  });

  useEffect(() => {
    if (requiredActions.every((action) => finishedActions.includes(action))) {
      dispatch(api.rtk.util.invalidateTags(["page"]));
      invalidateServerTag({ tag: "page" }).then(() => {
        router.refresh();

        toast("Saved!");
      });
    }
  }, [finishedActions]);

  const [updatePage, updatePageResult] = api.rtk.useUpdateMutation();
  const [createPage, createPageResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: props.data?.title || "",
      url: props.data?.url || "/",
      variant: props.data?.variant || "default",
    },
  });

  // const watchData = watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (props.data?.id || createPageResult.data?.id) {
      if (props.data?.id) {
        await updatePage({
          id: props.data?.id || createPageResult.data?.id,
          data,
        });
      }

      return;
    }

    await createPage({ data });
  }

  return (
    <div
      data-module="sps-website-builder"
      data-model="page"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} page
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
            <PageSpsLiteAdminFormInputs
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
