"use client";

import React, { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { Component as PagesToLayoutsSpsLiteSelectLayout } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-select-layout";
import { useActionTrigger } from "@sps/hooks";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  useActionTrigger({
    storeName: "sps-website-builder/pages-to-layouts",
    actionFilter: (action) =>
      action.type === "pages-to-layouts/executeMutation/fulfilled",
    callbackFunction: (action) => {
      if (props.setOpen) {
        props.setOpen(false);
      }
      router.refresh();
    },
  });

  const [updatePage, updatePageResult] = api.rtk.useUpdateMutation();
  const [createPage, createPageResult] = api.rtk.useCreateMutation();

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  // const watchData = watch();

  async function onSubmit(data: any) {
    if (props.data?.id) {
      await updatePage({ id: props.data?.id, data });

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
          <FormProvider {...methods}>
            <div className="flex flex-col gap-3">
              <FormField
                ui="sps"
                type="text"
                name="title"
                initialValue={props.data?.title || ""}
                placeholder="Page title"
                label="Title"
              />
              <FormField
                ui="sps"
                type="text"
                name="url"
                initialValue={props.data?.url || ""}
                placeholder="Page url"
                label="URL"
              />
              <PagesToLayoutsSpsLiteSelectLayout
                isServer={false}
                variant="select-layout"
                pageId={props.data?.id}
                data={props.data?.SPSWBPagesToLayouts}
              />
              <Button onClick={handleSubmit(onSubmit)}>Create</Button>
            </div>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
