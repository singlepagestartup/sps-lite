import { forwardRef } from "react";
import Sps, { Props as SpsProps } from "./sps";
import Shadcn, { Props as ShadcnProps } from "./shadcn";
import { ExtendedInputProps } from "..";

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

export interface Props extends ExtendedInputProps<"select"> {}

const Input = forwardRef<HTMLInputElement, Props>((props, passedRef) => {
  const Comp = ui[props.ui] ?? "input";

  return <Comp {...props} />;
});

export default Input;
