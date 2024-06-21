"use client";

import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  Card,
  CardHeader,
  Button,
} from "@sps/shared-ui-shadcn";
import { ChevronsUpDown, Plus } from "lucide-react";

interface IComponentProps {
  adminForm?: ReactNode;
  children: ReactNode;
  title: string;
}

export function Component(props: IComponentProps) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <div className="relative gap-6 pt-8 rounded-lg border p-4 border-input">
      <div className="flex absolute top-0 inset-x-0 px-4 transform -translate-y-1/2 justify-between items-center">
        <Button variant="outline" size="sm" className="gap-2 w-fit">
          {props.title}
        </Button>
        <div className="flex items-center gap-3">
          {props.adminForm ? (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Plus className="h-3 w-3" /> Add new
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 xl:min-w-lg max-h-[80vh] overflow-y-scroll">
                <Card>
                  {props.title ? (
                    <CardHeader>
                      <DialogTitle>{props.title}</DialogTitle>
                    </CardHeader>
                  ) : null}
                  {props.adminForm}
                </Card>
              </DialogContent>
            </Dialog>
          ) : null}
          <Button
            onClick={() => {
              setShow(!show);
            }}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <ChevronsUpDown className="h-3 w-3" /> {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
      <div className={`flex flex-col gap-6 ${show ? "" : "hidden"}`}>
        <div className="flex flex-col gap-6">{props.children}</div>
      </div>
    </div>
  );
}
