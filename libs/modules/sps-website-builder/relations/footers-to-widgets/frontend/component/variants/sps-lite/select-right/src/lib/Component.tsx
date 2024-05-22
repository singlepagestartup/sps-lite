"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-footers-to-widgets-frontend-api-client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-select-input";
import { ModelEntityCard } from "@sps/ui-adapter";

const formSchema = z.object({
  // replace with actual schema key
  footerId: z.string().min(1),
  // replace with actual schema key
  widgetId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      footerId: props.data?.footerId || props.footerId,
      widgetId: props.data?.widgetId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.footerId || !data.widgetId) {
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
    storeName: "sps-website-builder/footers",
    actionFilter: (action) => {
      return action.type === "footers/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("footerId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="footers-to-widgets"
      data-variant={props.variant}
      className=""
    >
      {props.data ? (
        <ModelEntityCard
          onDeleteEntity={() => {
            if (props.data?.id) {
              deleteEntity({ id: props.data.id });
            }
          }}
          data={props.data}
        >
          <div className="flex flex-col col-span-3 gap-0.5">
            <AdminSelectInput
              isServer={false}
              form={form}
              variant="admin-select-input"
              formFieldName="widgetId"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Select entity from widgets</CardTitle>
          </CardHeader>
          <CardContent>
            <AdminSelectInput
              isServer={false}
              form={form}
              variant="admin-select-input"
              formFieldName="widgetId"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
