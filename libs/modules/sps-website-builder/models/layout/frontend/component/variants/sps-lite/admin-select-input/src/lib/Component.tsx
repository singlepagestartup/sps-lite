"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sps/shadcn";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className="flex flex-col gap-3"
    >
      <FormField
        control={props.form.control}
        name={props.formFieldName}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Layout</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select layout" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {props.data.map((entity, index) => {
                  return (
                    <SelectItem key={index} value={entity.id}>
                      {entity[props.renderField || "title"]}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
