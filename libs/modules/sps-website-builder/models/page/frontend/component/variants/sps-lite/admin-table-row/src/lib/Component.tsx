"use client";

import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  TableCell,
  TableRow,
} from "@sps/shadcn";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { IComponentPropsExtended } from "./interface";
import { Component as PageSpsLiteAdminForm } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-form";

export function Component(props: IComponentPropsExtended) {
  return (
    <TableRow
      data-module="sps-website-builder"
      data-model="page"
      data-variant={props.variant}
    >
      <TableCell className="font-medium">{props.data.title}</TableCell>
      <TableCell>{props.data.url}</TableCell>
      <TableCell></TableCell>
      <TableCell className="flex gap-3 justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              onClick={() => {
                console.log("Edit page", props.data);
              }}
              className="w-fit"
            >
              <div className="flex gap-3">
                <PencilIcon className="h-5 w-5" />
                Edit
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl p-0">
            <PageSpsLiteAdminForm
              isServer={false}
              variant="admin-form"
              data={props.data}
            />
          </DialogContent>
        </Dialog>

        <Button
          variant="outline"
          onClick={() => {
            console.log("Edit page", props.data);
          }}
          className="hover:text-red-600 hover:border-red-600 hover:bg-red-100 w-fit"
        >
          <div className="flex gap-3">
            <TrashIcon className="h-5 w-5" />
            Delete
          </div>
        </Button>
      </TableCell>
    </TableRow>
  );
}
