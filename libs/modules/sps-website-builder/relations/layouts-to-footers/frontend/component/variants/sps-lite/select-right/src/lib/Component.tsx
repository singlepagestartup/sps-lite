"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-layouts-to-footers-frontend-api-client";
import { Component as FooterSpsLiteAdminSelectInput } from "@sps/sps-website-builder-models-footer-frontend-component-variants-sps-lite-admin-select-input";

const formSchema = z.object({
  layoutId: z.string().min(1),
  footerId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      layoutId: props.data?.layoutId || props.layoutId,
      footerId: props.data?.footerId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.layoutId || !data.footerId) {
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
    storeName: "sps-website-builder/layouts",
    actionFilter: (action) => {
      return action.type === "layouts/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("layoutId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="layouts-to-footers"
      data-variant={props.variant}
      className=""
    >
      <Card
        className={
          Object.keys(form.formState.errors)?.length ? "border-destructive" : ""
        }
      >
        <CardHeader>
          <CardTitle>Select entity from footers</CardTitle>
        </CardHeader>
        <CardContent>
          <FooterSpsLiteAdminSelectInput
            isServer={false}
            form={form}
            variant="admin-select-input"
            formFieldName="footerId"
          />
        </CardContent>
      </Card>
    </div>
  );
}
