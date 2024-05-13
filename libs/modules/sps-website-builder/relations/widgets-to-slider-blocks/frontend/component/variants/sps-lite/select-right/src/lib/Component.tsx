"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
import { api } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-frontend-api-client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-slider-block-frontend-component-variants-sps-lite-admin-select-input";
import { TrashIcon } from "@heroicons/react/24/outline";

const formSchema = z.object({
  // replace with actual schema key
  widgetId: z.string().min(1),
  // replace with actual schema key
  sliderBlockId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      widgetId: props.data?.widgetId || props.widgetId,
      sliderBlockId: props.data?.sliderBlockId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.widgetId || !data.sliderBlockId) {
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
    storeName: "sps-website-builder/widgets",
    actionFilter: (action) => {
      return action.type === "widgets/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        // replace with actual schema key
        form.setValue("widgetId", action.payload.id);
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
          <div className="flex items-center justify-between">
            <CardTitle>Select entity from slider-blocks</CardTitle>
            {props.data?.id ? (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="hover:text-red-600 hover:border-red-600 hover:bg-red-100 w-fit"
                  >
                    <div className="flex gap-3">
                      <TrashIcon className="h-5 w-5" />
                      Delete
                    </div>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete?</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        if (props.data?.id) {
                          deleteEntity({ id: props.data.id });
                        }
                      }}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : null}
          </div>
        </CardHeader>
        <CardContent>
          <AdminSelectInput
            isServer={false}
            form={form}
            variant="admin-select-input"
            formFieldName="sliderBlockId"
          />
        </CardContent>
      </Card>
    </div>
  );
}
