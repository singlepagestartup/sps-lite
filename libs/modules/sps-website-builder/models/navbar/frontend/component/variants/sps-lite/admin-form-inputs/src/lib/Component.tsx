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
import { Component as NavbarsToWidgetsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-navbars-to-widgets-frontend-component-variants-sps-lite-select-right";
import { variants } from "@sps/sps-website-builder-models-navbar-contracts";

export function Component(props: IComponentPropsExtended) {
  return (
    <form
      data-module="sps-website-builder"
      data-model="navbar"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
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
                      {variants.map((variant, index) => {
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

        {props.data?.navbarsToWidgets.map((entity, index) => {
          return (
            <NavbarsToWidgetsSpsLiteSelectRight
              key={index}
              isServer={false}
              variant="select-right"
              navbarId={props.data?.id}
              data={entity}
            />
          );
        })}

        <NavbarsToWidgetsSpsLiteSelectRight
          isServer={false}
          variant="select-right"
          navbarId={props.data?.id}
          data={undefined}
        />
      </div>
    </form>
  );
}
