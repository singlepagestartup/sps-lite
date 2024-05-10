"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
// import { Component as PagesToLayouts } from "@sps/sps-website-builder-models-pages-to-layouts-frontend-component-variants-sps-lite-default";
import { Component as PagesToLayoutsSpsLiteSelectLayout } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-select-layout";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

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

  const watchData = watch();

  async function onSubmit(data: any) {
    // data.tier = { id };
    if (props.data?.id) {
      console.log("🚀 ~ onSubmit ~ data:", data);

      await updatePage({ id: props.data?.id, data });

      return;
    }

    await createPage({ data });
  }

  useEffect(() => {
    if (updatePageResult.data || createPageResult.data) {
      console.log(`🚀 ~ useEffect ~ updatePageResult:`, updatePageResult);
      // router.refresh();
    }
  }, [updatePageResult, createPageResult]);

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
              {props.data?.id ? (
                <PagesToLayoutsSpsLiteSelectLayout
                  isServer={false}
                  variant="select-layout"
                  pageId={props.data.id}
                  data={props.data.SPSWBPagesToLayouts}
                />
              ) : null}
              {/* <PagesToLayouts isServer={false} variant="default" /> */}
              <Button onClick={handleSubmit(onSubmit)}>Create</Button>
            </div>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
