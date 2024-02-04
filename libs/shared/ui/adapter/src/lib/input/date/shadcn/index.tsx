"use client";

import { forwardRef, useEffect, useState } from "react";
import { Calendar } from "./shadcn";
import dayjs from "dayjs";
import { Props } from "..";

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [localValue, setLocalValue] = useState<Date | undefined>(
    props.value ? new Date(props.value) : new Date(),
  );

  useEffect(() => {
    if (props.value) {
      const propsValue = new Date(props.value);

      if (propsValue !== localValue) {
        setLocalValue(propsValue);
      }
    }
  }, [props.value]);

  useEffect(() => {
    if (!props.onChange) {
      return;
    }

    if (Array.isArray(localValue)) {
      const parsedDate = localValue.map((date: any) =>
        dayjs(date).format("YYYY-MM-DD"),
      );
      // @ts-ignore
      props.onChange(parsedDate);
      return;
    } else {
      const parsedDate = dayjs(localValue).format("YYYY-MM-DD");
      // @ts-ignore
      props.onChange(parsedDate);
      return;
    }
  }, [localValue]);

  return (
    <Calendar
      mode="single"
      selected={localValue}
      onSelect={setLocalValue}
      className="rounded-md border"
    />
  );
});

export default Input;
