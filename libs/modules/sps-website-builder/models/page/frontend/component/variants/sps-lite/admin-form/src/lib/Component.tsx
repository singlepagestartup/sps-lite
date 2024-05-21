"use client";

import React, { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
} from "@sps/shadcn";

import { useActionTrigger } from "@sps/hooks";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/store";
import { Component as PageSpsLiteAdminFormInputs } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-form-inputs";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  url: z
    .string()
    .min(1)
    .regex(/^[/]([a-z0-9-]?)+$/),
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
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card>
          <CardHeader>
            <CardTitle>{props.data?.id ? "Edit" : "Create"} Page</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <PageSpsLiteAdminFormInputs
                isServer={false}
                variant="admin-form-inputs"
                data={props.data}
                form={form}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary" onClick={form.handleSubmit(onSubmit)}>
              {props.data?.id ? "Save" : "Create"}
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
}
