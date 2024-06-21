"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@sps/shared-ui-shadcn";
import { IComponentProps } from "./interface";
import { Component as Input } from "../input";

export function Component(props: IComponentProps) {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => {
        return (
          <FormItem className={props.className}>
            {props.label ? <FormLabel>{props.label}</FormLabel> : null}
            <Input field={field} {...props} className={props.inputClassName} />
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
