"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-frontend-api-client";
// import { Component as AdminSelectInput } from "";

const formSchema = z.object({
  // replace with actual schema key
  leftModelId: z.string().min(1),
  // replace with actual schema key
  rightModelId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      leftModelId: props.data?.leftModelId || props.leftModelId,
      rightModelId: props.data?.rightModelId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.leftModelId || !data.rightModelId) {
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
    storeName: "sps-website-builder/<left-schema-tag>",
    actionFilter: (action) => {
      return action.type === "<left-schema-tag>/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        // replace with actual schema key
        form.setValue("leftModelId", action.payload.id);
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
          {/* <AdminSelectInput
            isServer={false}
            form={form}
            variant="admin-select-input"
            formFieldName="rightModelId"
          /> */}
        </CardContent>
      </Card>
    </div>
  );
}
