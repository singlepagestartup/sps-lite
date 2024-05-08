"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-pages-to-layouts-frontend-api-client";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { Component as PageSpsLiteAdminSelectInput } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-select-input";
import { Component as LayoutSpsLiteAdminSelectInput } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-select-input";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  const [createPagesToLayouts, createPagesToLayoutsResult] =
    api.rtk.useCreateMutation();

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = methods;

  const watchData = watch();

  async function onSubmit(data: any) {
    // data.tier = { id };
    await createPagesToLayouts({ data });
  }

  useEffect(() => {
    if (createPagesToLayoutsResult.data) {
      router.refresh();
    }
  }, [createPagesToLayoutsResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="libs"
      data-variant={props.variant}
      className=""
    >
      <Card>
        <CardHeader>
          <CardTitle>Pages to Layouts</CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...methods}>
            <div className="flex flex-col gap-3">
              <PageSpsLiteAdminSelectInput
                isServer={false}
                variant="admin-select-input"
                onChange={(...values) => {
                  setValue("pageId", values[0]);
                }}
              />
              <LayoutSpsLiteAdminSelectInput
                isServer={false}
                variant="admin-select-input"
                onChange={(...values) => {
                  setValue("layoutId", values[0]);
                }}
              />
              <Button onClick={handleSubmit(onSubmit)}>Create</Button>
            </div>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
