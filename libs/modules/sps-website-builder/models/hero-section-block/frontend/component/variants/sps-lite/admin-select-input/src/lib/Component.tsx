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
      data-model="hero-section-block"
      data-variant={props.variant}
      className=""
    >
      <FormField
        control={props.form.control}
        name={props.formFieldName}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Hero Section Block</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select hero-section-block" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {props.data.map((entity, index) => {
                  return (
                    <SelectItem key={index} value={entity.id}>
                      {entity[props.renderField || "id"]}
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
