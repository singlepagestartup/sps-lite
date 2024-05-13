"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-frontend-api-client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-slider-block-frontend-component-variants-sps-lite-admin-select-input";

const formSchema = z.object({
  // replace with actual schema key
  widgetId: z.string().min(1),
  // replace with actual schema key
  sliderBlockId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  console.log(`🚀 ~ Component ~ props:`, props);

  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      widgetId: props.data?.widgetId || props.widgetId,
      sliderBlockId: props.data?.sliderBlockId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.widgetId || !data.sliderBlockId) {
      return;
    }

    if (props.data?.id) {
      await updateEntity({
        id: props.data.id,
        data,
      });

      return;
    }

    await createEntity({
      data,
    });
  }

  useActionTrigger({
    // replace with actual schema name
    storeName: "sps-website-builder/widgets",
    actionFilter: (action) => {
      return action.type === "widgets/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        // replace with actual schema key
        form.setValue("widgetId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-slider-blocks"
      data-variant={props.variant}
      className=""
    >
      <Card
        className={
          Object.keys(form.formState.errors)?.length ? "border-destructive" : ""
        }
      >
        <CardHeader>
          <CardTitle>Select entity from slider-blocks</CardTitle>
        </CardHeader>
        <CardContent>
          <AdminSelectInput
            isServer={false}
            form={form}
            variant="admin-select-input"
            formFieldName="sliderBlockId"
          />
        </CardContent>
      </Card>
    </div>
  );
}
