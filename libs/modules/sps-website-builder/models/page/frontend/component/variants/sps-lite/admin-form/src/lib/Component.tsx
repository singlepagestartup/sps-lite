"use client";

import React, { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import { FormProvider, useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@sps/shadcn";
import { Component as PagesToLayoutsSpsLiteSelectLayout } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-select-layout";
import { useActionTrigger } from "@sps/hooks";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/store";

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

  useActionTrigger({
    storeName: "sps-website-builder/pages-to-layouts",
    actionFilter: (action) =>
      action.type === "pages-to-layouts/executeMutation/fulfilled",
    callbackFunction: async (action) => {
      if (props.setOpen) {
        props.setOpen(false);
      }
      dispatch(api.rtk.util.invalidateTags(["page"]));
      await invalidateServerTag({ tag: "page" });
      router.refresh();
    },
  });

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

  // useEffect(() => {
  //   if (updatePageResult.data || createPageResult.data) {
  //     // console.log(`🚀 ~ useEffect ~ updatePageResult:`, updatePageResult);
  //     // router.refresh();
  //   }
  // }, [updatePageResult, createPageResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="page"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Card>
        <CardHeader>
          <CardTitle>{props.data?.id ? "Edit" : "Create"} Page</CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <div className="flex flex-col gap-3">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title for page" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>URL</FormLabel>
                      <FormControl>
                        <Input placeholder="URL for page" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <PagesToLayoutsSpsLiteSelectLayout
                isServer={false}
                variant="select-layout"
                pageId={props.data?.id}
                data={props.data?.SPSWBPagesToLayouts}
              />
              <Button onClick={form.handleSubmit(onSubmit)}>
                {props.data?.id ? "Save" : "Create"}
              </Button>
            </div>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
