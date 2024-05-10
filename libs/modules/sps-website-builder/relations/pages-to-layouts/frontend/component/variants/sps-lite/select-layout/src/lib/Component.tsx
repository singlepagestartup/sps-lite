"use client";

import React, { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-api-client";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { Component as LayoutSpsLiteAdminSelectInput } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-select-input";
import { globalActionsStore } from "@sps/store";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  const globalActions = globalActionsStore.getState();
  const [triggeredActions, setTriggeredActions] = useState<string[]>();

  useEffect(() => {
    const pagesAction = globalActions.stores["sps-website-builder/pages"];
    pagesAction?.actions?.forEach(async (action: any) => {
      if (
        action.type === "pages/executeMutation/fulfilled" &&
        !triggeredActions?.includes(action.meta.requestId)
      ) {
        console.log(`🚀 ~ useEffect ~ pagesAction ~ action:`, action);

        if (triggeredActions) {
          setTriggeredActions([...triggeredActions, action.meta.requestId]);
        } else {
          setTriggeredActions([action.meta.requestId]);
        }

        onSubmit(watchData);
      }
    });
  }, [globalActions]);

  const router = useRouter();

  const [updatePagesToLayouts, updatePagesToLayoutsResult] =
    api.rtk.useUpdateMutation();
  const [createPagesToLayouts, createPagesToLayoutsResult] =
    api.rtk.useCreateMutation();

  const methods = useForm<any>({
    mode: "all",
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

  async function onSubmit(data: any) {
    if (props.data?.[0]?.id) {
      await updatePagesToLayouts({
        id: props.data[0].id,
        data,
      });

      return;
    }

    await createPagesToLayouts({
      data: {
        ...data,
        pageId: props.pageId,
      },
    });
  }

  // useEffect(() => {
  //   if (updatePagesToLayoutsResult.data || createPagesToLayoutsResult.data) {
  //     router.refresh();
  //   }
  // }, [updatePagesToLayoutsResult, createPagesToLayoutsResult]);

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
              {/* <FormField ui="sps" name="order" type="text" label="Order" /> */}
              <LayoutSpsLiteAdminSelectInput
                isServer={false}
                variant="admin-select-input"
                onChange={(value) => {
                  setValue("layoutId", value);
                }}
                value={watchData.layoutId}
              />
              {/* <Button onClick={handleSubmit(onSubmit)}>Create</Button> */}
            </div>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
