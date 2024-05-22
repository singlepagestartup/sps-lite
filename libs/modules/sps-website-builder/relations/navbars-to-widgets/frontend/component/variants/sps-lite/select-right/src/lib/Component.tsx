"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-navbars-to-widgets-frontend-api-client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-select-input";
import { ModelEntityCard } from "@sps/ui-adapter";

const formSchema = z.object({
  navbarId: z.string().min(1),
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
      navbarId: props.data?.navbarId || props.navbarId,
      widgetId: props.data?.widgetId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.navbarId || !data.widgetId) {
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
    storeName: "sps-website-builder/navbars",
    actionFilter: (action) => {
      return action.type === "navbars/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        // replace with actual schema key
        form.setValue("navbarId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="navbars-to-widgets"
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
          <CardHeader className="py-0">
            <CardTitle>Select entity from widgets</CardTitle>
          </CardHeader>
          <CardContent>
            <AdminSelectInput
              isServer={false}
              variant="admin-select-input"
              formFieldName="widgetId"
              form={form}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
