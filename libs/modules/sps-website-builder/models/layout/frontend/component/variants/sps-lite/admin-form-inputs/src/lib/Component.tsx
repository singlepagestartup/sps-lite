"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
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
import { Component as LayoutsToNavbarsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-layouts-to-navbars-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <form
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className="space-y-8"
    >
      <FormField
        control={props.form.control}
        name="title"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title for layout" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        control={props.form.control}
        name="variant"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Variant</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                  <SelectContent>
                    {props.variants.map((variant, index) => {
                      return (
                        <SelectItem key={index} value={variant}>
                          {variant}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      {props.data?.SPSWBLayoutsToNavbars.map((layoutsToNavbars, index) => {
        return (
          <LayoutsToNavbarsSpsLiteSelectRight
            key={index}
            isServer={false}
            data={layoutsToNavbars}
            variant="select-right"
          />
        );
      })}
      <LayoutsToNavbarsSpsLiteSelectRight
        isServer={false}
        variant="select-right"
      />
    </form>
  );
}
