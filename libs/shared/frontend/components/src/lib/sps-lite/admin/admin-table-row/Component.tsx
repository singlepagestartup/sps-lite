"use client";

import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@sps/shared-ui-shadcn";
import { Pencil, Trash } from "lucide-react";
import { cn } from "@sps/shared-frontend-utils-client";

interface IComponentProps {
  adminForm?: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: string;
  module: string;
  name: string;
  type?: "model" | "relation";
  id: string;
  onDelete?: (e: any) => void;
}

export function Component(props: IComponentProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-module={props.module}
      data-variant={props.variant}
      className={cn("w-full", props.className)}
      {...(props.type === "relation"
        ? {
            "data-relation": props.name,
          }
        : {
            "data-model": props.name,
          })}
    >
      <div className="relative rounded-lg border border-muted-foreground bg-background">
        <div className="flex items-center px-5 absolute transform -translate-y-1/2 inset-x-0 w-full justify-between">
          <p className="px-2 text-sm font-medium bg-muted-foreground text-muted rounded-sm max-w-40 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {props?.id}
          </p>
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
                      if (!props.onDelete) {
                        return;
                      }

                      props.onDelete(e);
                    }}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}
