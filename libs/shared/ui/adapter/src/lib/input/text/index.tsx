"use client";

import { forwardRef } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { ExtendedInputProps } from "..";

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

interface Props extends ExtendedInputProps<"text"> {}

export const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const Comp = ui[props.ui] ?? "input";

  return <Comp {...props} ref={ref} className={props.className ?? undefined} />;
});

export default TextInput;
