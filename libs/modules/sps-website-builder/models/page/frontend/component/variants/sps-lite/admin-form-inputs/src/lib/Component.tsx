"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as PagesToLayoutsSpsLiteSelectLayout } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-select-layout";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sps/shadcn";
import { Component as PagesToWidgetsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-pages-to-widgets-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-3">
        <FormField
          control={props.form.control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title for page" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={props.form.control}
          name="url"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input placeholder="URL for page" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {props.data?.pagesToWidgets.map((entity, index) => {
          return (
            <PagesToWidgetsSpsLiteSelectRight
              key={index}
              isServer={false}
              variant="select-right"
              pageId={props.data?.id}
              data={entity}
            />
          );
        })}
        <PagesToWidgetsSpsLiteSelectRight
          isServer={false}
          variant="select-right"
          pageId={props.data?.id}
          data={undefined}
        />
        <PagesToLayoutsSpsLiteSelectLayout
          isServer={false}
          variant="select-layout"
          pageId={props.data?.id}
          data={props.data?.pagesToLayouts}
        />
      </div>
    </div>
  );
}
