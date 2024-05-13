"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-frontend-api-client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-slider-frontend-component-variants-sps-lite-admin-select-input";

const formSchema = z.object({
  sliderBlockId: z.string().min(1),
  sliderId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      sliderBlockId: props.data?.sliderBlockId || props.sliderBlockId,
      sliderId: props.data?.sliderId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.sliderBlockId || !data.sliderId) {
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
    storeName: "sps-website-builder/slider-blocks",
    actionFilter: (action) => {
      return action.type === "slider-blocks/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("sliderBlockId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="slider-blocks-to-sliders"
      data-variant={props.variant}
      className=""
    >
      <Card
        className={
          Object.keys(form.formState.errors)?.length ? "border-destructive" : ""
        }
      >
        <CardHeader>
          <CardTitle>Select entity from sliders</CardTitle>
        </CardHeader>
        <CardContent>
          <AdminSelectInput
            isServer={false}
            form={form}
            variant="admin-select-input"
            formFieldName="sliderId"
          />
        </CardContent>
      </Card>
    </div>
  );
}
