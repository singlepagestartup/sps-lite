import React from "react";
import { IComponentPropsExtended } from "./interface";
import {
  Label,
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
      data-model="page"
      data-variant={props.variant}
      className=""
    >
      <Label>Page</Label>
      <Select
        onValueChange={(...values) => {
          if (!props.onChange) {
            return;
          }

          props.onChange(values);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select page" />
        </SelectTrigger>
        <SelectContent>
          {props.data.map((page, index) => {
            return (
              <SelectItem key={index} value={`${page.id}`}>
                {page.title}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
