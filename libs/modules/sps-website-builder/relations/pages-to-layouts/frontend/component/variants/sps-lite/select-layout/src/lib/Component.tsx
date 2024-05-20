"use client";

import React, { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-api-client";
import { FormProvider, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle, Label } from "@sps/shadcn";
import { Component as LayoutSpsLiteAdminSelectInput } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-select-input";
import { useActionTrigger } from "@sps/hooks";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  pageId: z.string().min(1),
  layoutId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updatePagesToLayouts, updatePagesToLayoutsResult] =
    api.rtk.useUpdateMutation();
  const [createPagesToLayouts, createPagesToLayoutsResult] =
    api.rtk.useCreateMutation();

  const methods = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      layoutId: props.data?.[0]?.layoutId,
      pageId: props.pageId,
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = methods;

  const watchData = watch();

  // useEffect(() => {
  //   console.log(`🚀 ~ useEffect ~ watchData:`, watchData);
  // }, [watchData]);

  useActionTrigger({
    storeName: "sps-website-builder/pages",
    actionFilter: (action) => {
      return action.type === "pages/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        setValue("pageId", action.payload.id);
      }

      handleSubmit(onSubmit)();
    },
  });

  // useEffect(() => {
  //   console.log(`🚀 ~ useEffect ~ watchData:`, watchData);
  // }, [watchData]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.layoutId || !data.pageId) {
      return;
    }

    if (props.data?.[0]?.id) {
      await updatePagesToLayouts({
        id: props.data[0].id,
        data,
      });

      return;
    }

    await createPagesToLayouts({
      data,
    });
  }

  return (
    <div
      data-module="sps-website-builder"
      data-model="pages-to-layouts"
      data-variant={props.variant}
      className=""
    >
      <Card className={Object.keys(errors).length ? "border-destructive" : ""}>
        <CardHeader>
          <CardTitle>Layout</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <FormProvider {...methods}>
            <LayoutSpsLiteAdminSelectInput
              isServer={false}
              variant="admin-select-input"
              onChange={(value) => {
                setValue("layoutId", value);
              }}
              value={watchData.layoutId}
            />
          </FormProvider> */}
        </CardContent>
      </Card>
    </div>
  );
}
