"use client";

import { forwardRef } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { ExtendedInputProps } from "..";

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

export interface Props extends ExtendedInputProps<"select"> {}

export const SelectInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const Comp = ui[props.ui] ?? "input";

  return <Comp {...props} ref={ref} />;
});

export default SelectInput;
