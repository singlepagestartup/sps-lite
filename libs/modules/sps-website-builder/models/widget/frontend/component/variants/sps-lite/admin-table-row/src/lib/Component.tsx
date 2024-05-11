"use client";

import React, { useState } from "react";
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
  Dialog,
  DialogContent,
  DialogTrigger,
  TableCell,
  TableRow,
} from "@sps/shadcn";
import { IComponentPropsExtended } from "./interface";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { api } from "@sps/sps-website-builder-models-widget-frontend-api-client";
import { Component as WidgetSpsLiteAdminForm } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-form";

export function Component(props: IComponentPropsExtended) {
  const [open, setOpen] = useState(false);
  const [deleteMutation, deleteMutationResult] = api.rtk.useDeleteMutation();

  return (
    <TableRow
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
    >
      <TableCell className="font-medium">{props.data.id}</TableCell>
      <TableCell></TableCell>
      <TableCell className="flex gap-3 justify-end">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-fit">
              <div className="flex gap-3">
                <PencilIcon className="h-5 w-5" />
                Edit
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl p-0">
            <WidgetSpsLiteAdminForm
              isServer={false}
              variant="admin-form"
              data={props.data}
              setOpen={setOpen}
            />
          </DialogContent>
        </Dialog>

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
                  deleteMutation({ id: props.data.id });
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
}
