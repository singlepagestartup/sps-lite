"use client";

import {
  FormControl,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sps/shadcn";
import { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  if (props.type === "text") {
    return (
      <FormControl>
        <Input placeholder={props.placeholder} {...props.field} />
      </FormControl>
    );
  }

  if (props.type === "select") {
    return (
      <Select
        onValueChange={props.field.onChange}
        defaultValue={props.field.value}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={props.placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {props.options.map((variant, index) => {
            return (
              <SelectItem key={index} value={variant}>
                {variant}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    );
  }
}
