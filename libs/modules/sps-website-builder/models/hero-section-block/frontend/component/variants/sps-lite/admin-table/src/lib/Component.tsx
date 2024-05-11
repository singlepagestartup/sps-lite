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
import { Component as HeroSrctionBlockSpsLiteAdminTableRow } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-table-row";
import { Component as HeroSectionBlockSpsLiteAdminForm } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-form";

export function Component(props: IComponentPropsExtended) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className=""
    >
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>hero-section-block</CardTitle>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-fit">
                  <div className="flex gap-3">
                    <PlusIcon className="h-5 w-5" />
                    Add new hero-section-block
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-0">
                <HeroSectionBlockSpsLiteAdminForm
                  isServer={false}
                  variant="admin-form"
                />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>

        <CardContent>
          <Table>
            <TableCaption>List of existing layouts</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Variant</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.data.map((entity, index) => {
                return (
                  <HeroSrctionBlockSpsLiteAdminTableRow
                    key={index}
                    isServer={false}
                    variant="admin-table-row"
                    data={entity}
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
