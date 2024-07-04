"use client";

import React, { useState } from "react";
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
  Card,
  CardHeader,
  DialogTitle,
} from "@sps/shared-ui-shadcn";
import { IComponentProps } from "./interface";
import { Pencil, Trash } from "lucide-react";

export function Component(props: IComponentProps) {
  const [open, setOpen] = useState(false);

  return (
    <div data-ui="entity-card" className="entity-container">
      <div className="entity-header-block">
        <p className="entity-legend">{props?.data?.id}</p>
        <div className="flex items-center gap-3">
          {props.adminForm ? (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="pill-button">
                  <Pencil className="h-3 w-3" />
                  <p className="hidden lg:inline">Edit</p>
                </button>
              </DialogTrigger>
              <DialogContent className="p-0 xl:min-w-lg max-h-[80vh] overflow-y-scroll">
                <DialogTitle className="hidden">Edit</DialogTitle>
                {props.adminForm}
              </DialogContent>
            </Dialog>
          ) : null}

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="destructive-pill-button">
                <Trash className="h-3 w-3" />
                <p className="hidden lg:inline">Delete</p>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={(e) => {
                    if (!props.onDeleteEntity) {
                      return;
                    }

                    props.onDeleteEntity(e);
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
        {props.children}
      </CardContent>
    </div>
  );
}
