"use client";

import React, { useState } from "react";
import {
  Card,
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  Button,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@sps/shadcn";
import { IComponentPropsExtended } from "./interface";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Component as AdminForm } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-form";
import { Component as AdminTableRow } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-table-row";

export function Component(props: IComponentPropsExtended) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <div
      data-module="sps-website-builder"
      data-model="button"
      data-variant={props.variant}
      className={`${props.className || ""} w-full`}
    >
      <div className="model-container bg-dotted">
        <div className="model-header-block">
          <p className="model-legend">buttons</p>
          <div className="flex items-center gap-3">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="pill-button">
                  <PlusIcon className="h-5 w-5" />
                  Add new
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-0 max-h-[90vh] overflow-y-scroll">
                <AdminForm isServer={false} variant="admin-form" />
              </DialogContent>
            </Dialog>

            <button
              className="pill-button"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className={`flex flex-col gap-6 ${show ? "" : "hidden"}`}>
          <div className="flex flex-col gap-6">
            {props.data.map((entity, index) => {
              return (
                <AdminTableRow
                  key={index}
                  isServer={false}
                  variant="admin-table-row"
                  data={entity}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
