"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Card, CardContent } from "@sps/shadcn";
import { z } from "zod";
import { FormField, ModelEntityCard } from "@sps/ui-adapter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-arrays-frontend-api-client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-buttons-array-frontend-component";

const formSchema = z.object({
  navbarBlockId: z.string().min(1),
  buttonsArrayId: z.string().min(1),
  direction: z.enum(["default", "reverse"]).default("default"),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      navbarBlockId: props.data?.navbarBlockId || props.navbarBlockId,
      buttonsArrayId: props.data?.buttonsArrayId,
      direction: props.data?.direction || "default",
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.navbarBlockId || !data.buttonsArrayId) {
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
    storeName: "sps-website-builder/navbar-blocks",
    actionFilter: (action) => {
      return action.type === "navbar-blocks/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("navbarBlockId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="navbar-blocks-to-buttons-arrays"
      data-variant={props.variant}
      className="w-full"
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
            <FormField
              ui="shadcn"
              type="select"
              label="Direction"
              name="direction"
              form={form}
              placeholder="Select direction of relation"
              options={[
                ["default", "Default"],
                ["reverse", "Reverse"],
              ]}
            />
            <AdminSelectInput
              isServer={false}
              form={form}
              variant="admin-select-input"
              formFieldName="buttonsArrayId"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from buttons-arrays
          </h3>
          <CardContent className="flex flex-col gap-6">
            <FormField
              ui="shadcn"
              type="select"
              label="Direction"
              name="direction"
              form={form}
              placeholder="Select direction of relation"
              options={[
                ["default", "Default"],
                ["reverse", "Reverse"],
              ]}
            />
            <AdminSelectInput
              isServer={false}
              form={form}
              variant="admin-select-input"
              formFieldName="buttonsArrayId"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}