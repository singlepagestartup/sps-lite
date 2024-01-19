import { forwardRef } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { ExtendedInputProps } from "..";

export interface Props extends ExtendedInputProps<"range"> {}

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const Comp = props.ui ? ui[props.ui] : "input";

  return <Comp {...props} ref={ref} />;
});

export default Input;
