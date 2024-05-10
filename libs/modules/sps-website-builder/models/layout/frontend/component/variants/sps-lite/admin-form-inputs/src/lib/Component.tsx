"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sps/shadcn";

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
    </form>
  );
}
