import { forwardRef } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { IInputProps } from "..";

export interface Props
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "defaultValue" | "name" | "onChange" | "min" | "max" | "step"
    >,
    IInputProps {
  asChild?: boolean;
  ui: "sps" | "shadcn";
  "data-ui-variant"?: string;
  "data-ui-size"?: string;
}

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

const Input = forwardRef<HTMLInputElement, Props>((props, passedRef) => {
  const Comp = props.ui ? ui[props.ui] : "input";

  return <Comp {...props} />;
});

export default Input;
