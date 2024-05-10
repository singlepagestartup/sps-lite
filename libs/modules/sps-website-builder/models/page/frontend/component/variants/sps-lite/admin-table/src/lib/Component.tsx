"use client";

import React, { useState } from "react";
import { IComponentPropsExtended } from "./interface";
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
import { Component as PageSpsLiteAdminTableRow } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table-row";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Component as PageSpsLiteAdminForm } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-form";

export function Component(props: IComponentPropsExtended) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-module="sps-website-builder"
      data-model="page"
      data-variant={props.variant}
      className={`${props.className || "w-full"}`}
    >
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Page</CardTitle>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-fit">
                  <div className="flex gap-3">
                    <PlusIcon className="h-5 w-5" />
                    Add new page
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-0">
                <PageSpsLiteAdminForm
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
            <TableCaption>List of existing pages</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>URL</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.data.map((page, index) => {
                return (
                  <PageSpsLiteAdminTableRow
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
