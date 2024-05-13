"use client";

import React, { useEffect, useState } from "react";
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
import { api } from "@sps/sps-website-builder-models-navbar-block-frontend-api-client";
import { invalidateServerTag } from "@sps/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Component as NavbarBlockSpsLiteAdminForm } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-form";

export function Component(props: IComponentPropsExtended) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [deleteMutation, deleteMutationResult] = api.rtk.useDeleteMutation();

  useEffect(() => {
    if (deleteMutationResult.isSuccess) {
      dispatch(api.rtk.util.invalidateTags(["navbar-block"]));
      invalidateServerTag({ tag: "navbar-block" }).then(() => {
        router.refresh();
      });
    }
  }, [deleteMutationResult]);

  return (
    <TableRow
      data-module="sps-website-builder"
      data-model="navbar-block"
      data-variant={props.variant}
    >
      <TableCell className="font-medium text-left">{props.data.id}</TableCell>
      <TableCell>{props.data.variant}</TableCell>
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
          <DialogContent className="sm:max-w-3xl p-0 max-h-[90vh] overflow-y-scroll">
            <NavbarBlockSpsLiteAdminForm
              isServer={false}
              variant="admin-form"
              data={props.data}
            />
          </DialogContent>
        </Dialog>

        <Button
          variant="outline"
          onClick={() => {
            deleteMutation({ id: props.data.id });
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
