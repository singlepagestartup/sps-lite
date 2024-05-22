"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-frontend-api-client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-select-input";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ModelEntityCard, FormField } from "@sps/ui-adapter";

const places = ["default", "additional", "extra"] as const;

const formSchema = z.object({
  navbarBlockId: z.string().min(1),
  buttonId: z.string().min(1),
  orderIndex: z.number().int(),
  place: z.enum(places),
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
      buttonId: props.data?.buttonId,
      orderIndex: props.data?.orderIndex || 0,
      place: props.data?.place || "default",
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.navbarBlockId || !data.buttonId) {
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
      data-relation="navbar-blocks-to-buttons"
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
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-muted-foreground">Place</p>
            <p>{props.data.place}</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-muted-foreground">Order Index</p>
            <p>{props.data.orderIndex}</p>
          </div>
          <div className="flex flex-col col-span-3 gap-0.5">
            <FormField
              ui="shadcn"
              type="text"
              label="Order Index"
              name="orderIndex"
              form={form}
              placeholder="Type order index"
            />
            <FormField
              ui="shadcn"
              type="select"
              label="Place"
              name="place"
              form={form}
              placeholder="Select place"
              options={places.slice()}
            />
            <AdminSelectInput
              isServer={false}
              form={form}
              variant="admin-select-input"
              formFieldName="buttonId"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Select entity from buttons</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            <FormField
              ui="shadcn"
              type="text"
              label="Order Index"
              name="orderIndex"
              form={form}
              placeholder="Type order index"
            />
            <FormField
              ui="shadcn"
              type="select"
              label="Place"
              name="place"
              form={form}
              placeholder="Select place"
              options={places.slice()}
            />
            <AdminSelectInput
              isServer={false}
              form={form}
              variant="admin-select-input"
              formFieldName="buttonId"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
