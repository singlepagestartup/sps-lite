import { forwardRef } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { ExtendedInputProps } from "..";

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

interface Props extends ExtendedInputProps<"text"> {}

const Input = forwardRef<HTMLInputElement, Props>((props, passedRef) => {
  const Comp = ui[props.ui] ?? "input";

  return <Comp {...props} className={props.className ?? undefined} />;
});

export default Input;
