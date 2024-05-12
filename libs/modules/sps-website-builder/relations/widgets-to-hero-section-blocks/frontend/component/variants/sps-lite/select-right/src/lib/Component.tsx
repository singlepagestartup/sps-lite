"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { Component as HeroSectionBlockSpsLiteAdminSelectInput } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-select-input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-api-client";

const formSchema = z.object({
  widgetId: z.string().min(1),
  heroSectionBlockId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      heroSectionBlockId: props.data?.heroSectionBlockId,
      widgetId: props.data?.widgetId || props.widgetId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.widgetId || !data.heroSectionBlockId) {
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
    storeName: "sps-website-builder/widgets",
    actionFilter: (action) => {
      return action.type === "widgets/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("widgetId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  // useEffect(() => {
  //   console.log(`🚀 ~ w-t-hsb ~ watchData:`, watchData);
  // }, [watchData]);

  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-hero-section-blocks"
      data-variant={props.variant}
      className=""
    >
      <Card
        className={
          Object.keys(form.formState.errors)?.length ? "border-destructive" : ""
        }
      >
        <CardHeader>
          <CardTitle>Hero Section Block</CardTitle>
        </CardHeader>
        <CardContent>
          <HeroSectionBlockSpsLiteAdminSelectInput
            isServer={false}
            variant="admin-select-input"
            formFieldName="heroSectionBlockId"
            form={form}
          />
        </CardContent>
      </Card>
    </div>
  );
}
