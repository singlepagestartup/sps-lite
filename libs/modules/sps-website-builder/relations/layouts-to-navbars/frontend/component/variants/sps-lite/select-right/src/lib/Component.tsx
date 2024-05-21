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
  FormControl,
  FormField,
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
import { api } from "@sps/sps-website-builder-relations-layouts-to-navbars-frontend-api-client";
import { Component as NavbarSpsLiteAdminSelectInput } from "@sps/sps-website-builder-models-navbar-frontend-component-variants-sps-lite-admin-select-input";
import { TrashIcon } from "@heroicons/react/24/outline";

const formSchema = z.object({
  layoutId: z.string().min(1),
  navbarId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      layoutId: props.data?.layoutId || props.layoutId,
      navbarId: props.data?.navbarId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.layoutId || !data.navbarId) {
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
      data-relation="layouts-to-navbars"
      data-variant={props.variant}
      className=""
    >
      <Card
        className={`entity-container ${
          Object.keys(form.formState.errors)?.length ? "border-destructive" : ""
        }`}
      >
        {props.data ? (
          <div className="entity-header-block">
            <p className="entity-legend">{props.data.id}</p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="destructive-pill-button">
                  <TrashIcon className="h-3 w-3" />
                  Delete
                </button>
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
          </div>
        ) : null}
        {!props.data?.id ? (
          <CardHeader className="py-0">
            <CardTitle>Select entity from navbar</CardTitle>
          </CardHeader>
        ) : null}
        <CardContent>
          <NavbarSpsLiteAdminSelectInput
            isServer={false}
            form={form}
            variant="admin-select-input"
            formFieldName="navbarId"
          />
        </CardContent>
      </Card>
    </div>
  );
}
