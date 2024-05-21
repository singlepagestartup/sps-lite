"use client";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
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
import { ReactNode, useState } from "react";

interface IComponentProps {
  data: {
    id: string;
  };
  onDeleteEntity: (e: React.MouseEvent<HTMLButtonElement>) => void;
  adminForm: ReactNode;
  children: ReactNode;
}

export function Component(props: IComponentProps) {
  const [open, setOpen] = useState(false);

  return (
    <div data-ui="entity-card" className="entity-container">
      <div className="entity-header-block">
        <p className="entity-legend">{props.data.id}</p>
        <div className="flex items-center gap-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="pill-button">
                <PencilIcon className="h-3 w-3" />
                <p className="hidden lg:inline">Edit</p>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl p-0 max-h-[90vh] overflow-y-scroll">
              {props.adminForm}
            </DialogContent>
          </Dialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="destructive-pill-button">
                <TrashIcon className="h-3 w-3" />
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
