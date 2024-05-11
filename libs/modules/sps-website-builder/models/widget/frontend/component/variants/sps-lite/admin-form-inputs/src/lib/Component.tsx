import React from "react";
import { IComponentPropsExtended } from "./interface";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@sps/shadcn";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      {/* <FormField
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
      /> */}
    </div>
  );
}
