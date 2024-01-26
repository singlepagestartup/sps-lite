"use client";

import { forwardRef } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { ExtendedInputProps } from "..";

export interface Props extends ExtendedInputProps<"date"> {}

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

export const DateInput = forwardRef<HTMLInputElement, Props>(
  (props, passedRef) => {
    const Comp = props.ui ? ui[props.ui] : "input";

    return <Comp {...props} className={props.className || undefined} />;
  },
);

export default DateInput;
