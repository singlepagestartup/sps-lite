"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-select-input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-api-client";
import { ModelEntityCard } from "@sps/ui-adapter";

const formSchema = z.object({
  widgetId: z.string().min(1),
  heroSectionBlockId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

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
              formFieldName="heroSectionBlockId"
              renderField="title"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from hero-section-blocks
          </h3>
          <CardContent>
            <AdminSelectInput
              isServer={false}
              variant="admin-select-input"
              formFieldName="heroSectionBlockId"
              renderField="title"
              form={form}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
