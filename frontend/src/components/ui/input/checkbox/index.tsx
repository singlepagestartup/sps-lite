import { forwardRef } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { ExtendedInputProps } from "..";

const ui = {
  shadcn: Shadcn,
  sps: Sps,
};

export interface Props extends ExtendedInputProps<"checkbox"> {}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const Comp = ui[props.ui] ?? "input";

  return <Comp {...props} className={props.className ?? undefined} ref={ref} />;
});

export default Input;
