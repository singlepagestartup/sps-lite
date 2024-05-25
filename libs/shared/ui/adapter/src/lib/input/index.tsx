"use client";

import {
  DateTimePicker,
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

  if (props.type === "datetime") {
    return (
      <FormControl>
        <DateTimePicker
          {...props.field}
          mode="single"
          placeholder={props.placeholder}
          value={props.field.value}
          onChange={props.field.onChange}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
        />
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
          {props.options.map((option, index) => {
            return (
              <SelectItem key={index} value={option[0]}>
                {typeof option[1] === "function"
                  ? option[1](option)
                  : option[1]}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    );
  }
}
