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
import { api } from "@sps/sps-file-storage-models-file-frontend-api-client";
import { invalidateServerTag } from "@sps/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
// import { Component as AdminForm } from "@sps/sps-website-builder-models-file-frontend-component-variants-sps-lite-admin-form";

export function Component(props: IComponentPropsExtended) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [deleteMutation, deleteMutationResult] = api.rtk.useDeleteMutation();

  useEffect(() => {
    if (deleteMutationResult.isSuccess) {
      dispatch(api.rtk.util.invalidateTags(["file"]));
      invalidateServerTag({ tag: "file" }).then(() => {
        router.refresh();
      });
    }
  }, [deleteMutationResult]);

  return (
    <TableRow
      data-module="sps-file-storage"
      data-model="file"
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
            {/* <AdminForm
              isServer={false}
              variant="admin-form"
              data={props.data}
            /> */}
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
