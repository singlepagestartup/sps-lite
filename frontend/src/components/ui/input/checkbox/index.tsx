import { forwardRef } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { ExtendedInputProps } from "..";

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

export interface Props extends ExtendedInputProps<"checkbox"> {}

const Input = forwardRef<HTMLInputElement, Props>((props, passedRef) => {
  const Comp = props.ui ? ui[props.ui] : "input";

  return <Comp {...props} className={props.className ?? undefined} />;
});

export default Input;
