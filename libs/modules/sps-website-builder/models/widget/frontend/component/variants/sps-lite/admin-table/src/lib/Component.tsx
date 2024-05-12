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
import { Component as WidgetSpsLiteAdminForm } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-form";
import { Component as WidgetSpsLiteAdminTableRow } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-table-row";

export function Component(props: IComponentPropsExtended) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
      className={`${props.className || "w-full"}`}
    >
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Widget</CardTitle>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-fit">
                  <div className="flex gap-3">
                    <PlusIcon className="h-5 w-5" />
                    Add new widget
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-0 max-h-[90vh] overflow-y-scroll">
                <WidgetSpsLiteAdminForm
                  isServer={false}
                  variant="admin-form"
                  setOpen={setOpen}
                />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>

        <CardContent>
          <Table>
            <TableCaption>List of existing widgets</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.data.map((page, index) => {
                return (
                  <WidgetSpsLiteAdminTableRow
                    key={index}
                    isServer={false}
                    data={page}
                    variant="admin-table-row"
                  />
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
