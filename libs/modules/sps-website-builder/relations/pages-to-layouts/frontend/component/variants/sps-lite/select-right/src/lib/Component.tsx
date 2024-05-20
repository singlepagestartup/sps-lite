"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/hooks";
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
import { api } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-api-client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-select-input";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { BACKEND_URL } from "@sps/shared-utils";

const formSchema = z.object({
  pageId: z.string().min(1),
  layoutId: z.string().min(1),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      pageId: props.data?.pageId || props.pageId,
      layoutId: props.data?.layoutId,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.pageId || !data.layoutId) {
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
    storeName: "sps-website-builder/pages",
    actionFilter: (action) => {
      return action.type === "pages/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("pageId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="pages-to-layouts"
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
            <Link
              href={`${BACKEND_URL}/api/sps-website-builder/pages-to-layouts/${props.data.id}`}
              target="_blank"
            >
              <legend className="entity-legend">{props.data.id}</legend>
            </Link>
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
            <CardTitle>Select entity from layout</CardTitle>
          </CardHeader>
        ) : null}
        <CardContent>
          <AdminSelectInput
            isServer={false}
            form={form}
            variant="admin-select-input"
            formFieldName="layoutId"
          />
        </CardContent>
      </Card>
    </div>
  );
}
