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
import { variants } from "@sps/sps-website-builder-models-navbar-block-contracts";

export function Component(props: IComponentPropsExtended) {
  return (
    <form
      data-module="sps-website-builder"
      data-model="navbar-block"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <FormField
        control={props.form.control}
        name="variant"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Variant</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select variant" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {variants.map((variant, index) => {
                  return (
                    <SelectItem key={index} value={variant}>
                      {variant}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
}
