"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@sps/shared-ui-shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/shared-frontend-hooks";
import { api } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/frontend/api/client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder/models/footer-block/frontend/component/variants/sps-lite/admin-select-input";
import { FormField, ModelEntityCard } from "@sps/ui-adapter";

const formSchema = z.object({
  widgetId: z.string().min(1),
  footerBlockId: z.string().min(1),
  className: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();
  const deleteEntity = api.delete();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      widgetId: props.data?.widgetId || props.widgetId,
      footerBlockId: props.data?.footerBlockId,
      className: props.data?.className || "",
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.widgetId || !data.footerBlockId) {
      return;
    }

    if (props.data?.id) {
      updateEntity.mutate({
        id: props.data.id,
        data,
      });

      return;
    }

    createEntity.mutate({
      data,
    });
  }

  useActionTrigger({
    storeName: "sps-website-builder/widget",
    actionFilter: (action) => {
      return action.type === "widget/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("widgetId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-footer-blocks"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className=""
    >
      {props.data ? (
        <ModelEntityCard
          onDeleteEntity={() => {
            if (props.data?.id) {
              deleteEntity.mutate({ id: props.data.id });
            }
          }}
          data={props.data}
        >
          <div className="flex flex-col col-span-3 gap-0.5">
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="footerBlockId"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from footer-blocks
          </h3>
          <CardContent>
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="footerBlockId"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
