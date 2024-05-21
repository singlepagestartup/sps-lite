"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  CardContent,
} from "@sps/shadcn";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder-models-button-frontend-api-client";
import { invalidateServerTag } from "@sps/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Component as AdminForm } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-form";

export function Component(props: IComponentPropsExtended) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  useEffect(() => {
    if (deleteEntityResult.isSuccess) {
      dispatch(api.rtk.util.invalidateTags(["button"]));
      invalidateServerTag({ tag: "button" }).then(() => {
        router.refresh();
      });
    }
  }, [deleteEntityResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="button"
      data-variant={props.variant}
      className="entity-container"
    >
      <div className="entity-header-block">
        <p className="entity-legend">{props.data.id}</p>
        <div className="flex items-center gap-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="pill-button">
                <PencilIcon className="h-3 w-3" />
                Edit
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl p-0 max-h-[90vh] overflow-y-scroll">
              <AdminForm
                isServer={false}
                variant="admin-form"
                data={props.data}
              />
            </DialogContent>
          </Dialog>

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
      </div>
      <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-muted-foreground">Title</p>
          <p>{props.data.title}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-muted-foreground">Variant</p>
          <p>{props.data.variant}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-muted-foreground">Url</p>
          <p>{props.data.url}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-muted-foreground">Class Name</p>
          <p>{props.data.className || ""}</p>
        </div>
      </CardContent>
    </div>
  );
}
