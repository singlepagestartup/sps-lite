"use client";

import React, { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-api-client";
import { FormProvider, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle, Label } from "@sps/shadcn";
import { Component as LayoutSpsLiteAdminSelectInput } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-select-input";
import { Component as LayoutSpsLiteAdminForm } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-form";
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
  const [hasValidationErrors, setHasValidationErrors] =
    useState<boolean>(false);

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
    storeName: "sps-website-builder/layouts",
    actionFilter: (action) => {
      return action.type === "layouts/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        setValue("layoutId", action.payload.id);
      }

      handleSubmit(onSubmit)();
    },
  });

  useActionTrigger({
    storeName: "sps-website-builder/pages",
    actionFilter: (action) => {
      return action.type === "pages/executeMutation/fulfilled";
    },
    callbackFunction: (action) => {
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
      <Card>
        <CardHeader>
          <CardTitle>Layout</CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...methods}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Card
                  className={`${hasValidationErrors ? "border-destructive" : ""}`}
                >
                  <CardHeader>
                    <CardTitle>Create new layout</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LayoutSpsLiteAdminForm
                      isServer={false}
                      variant="admin-form"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col gap-3">
                <Card
                  className={`${hasValidationErrors ? "border-destructive" : ""}`}
                >
                  <CardHeader>
                    <CardTitle>Select from existing layouts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LayoutSpsLiteAdminSelectInput
                      isServer={false}
                      variant="admin-select-input"
                      onChange={(value) => {
                        setValue("layoutId", value);
                      }}
                      value={watchData.layoutId}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
