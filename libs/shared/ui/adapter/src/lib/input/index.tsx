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
  FileInputRoot,
  TipTap,
} from "@sps/shadcn";
import { IComponentProps } from "./interface";
import React from "react";

const Placeholder = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      Select file
    </div>
  );
};

export const Component = (props: IComponentProps) => {
  if (props.type === "text" || props.type === "password") {
    return (
      <FormControl>
        <Input
          placeholder={props.placeholder}
          {...props.field}
          type={props.type}
          className={props.className}
        />
      </FormControl>
    );
  }

  if (props.type === "tiptap") {
    return (
      <FormControl>
        <TipTap
          placeholder={props.placeholder}
          {...props.field}
          form={props.form}
          className={props.className}
          editable={true}
        />
      </FormControl>
    );
  }

  if (props.type === "textarea") {
    return (
      <FormControl>
        <Input
          placeholder={props.placeholder}
          {...props.field}
          className={props.className}
        />
      </FormControl>
    );
  }

  if (props.type === "file") {
    return (
      <FormControl>
        <FileInputRoot
          placeholder={props.placeholder}
          {...props.field}
          form={props.form}
          className={props.className}
        >
          <Placeholder />
          <div className="bg-green-300 p-3 opacity-10"></div>
        </FileInputRoot>
      </FormControl>
    );
  }

  if (props.type === "number") {
    return (
      <FormControl>
        <Input
          placeholder={props.placeholder}
          type="number"
          {...props.field}
          className={props.className}
          onChange={(event) => {
            const value = +event.target.value;

            if (!isNaN(value)) {
              props.field.onChange(value);
            }
          }}
        />
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
          className={props.className}
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
          <SelectTrigger className={props.className}>
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
};
