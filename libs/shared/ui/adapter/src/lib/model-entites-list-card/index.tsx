"use client";

import { ReactNode, useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@sps/shadcn";
import { ChevronUpDownIcon, PlusIcon } from "@heroicons/react/24/outline";

interface IComponentProps {
  adminForm?: ReactNode;
  children: ReactNode;
  title: string;
}

export function Component(props: IComponentProps) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <div className="model-container bg-dotted">
      <div className="model-header-block">
        <p className="model-legend">{props.title}</p>
        <div className="flex items-center gap-3">
          {props.adminForm ? (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="pill-button">
                  <PlusIcon className="h-3 w-3" />
                  <p className="hidden lg:inline">Add new</p>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-0 max-h-[90vh] overflow-y-scroll">
                {props.adminForm}
              </DialogContent>
            </Dialog>
          ) : null}
          <button
            className="pill-button"
            onClick={() => {
              setShow(!show);
            }}
          >
            <ChevronUpDownIcon className="h-3 w-3" />
            <p className="hidden lg:inline">{show ? "Hide" : "Show"}</p>
          </button>
        </div>
      </div>
      <div className={`flex flex-col gap-6 ${show ? "" : "hidden"}`}>
        <div className="flex flex-col gap-6">{props.children}</div>
      </div>
    </div>
  );
}
