import { forwardRef } from "react";
import Sps, { Props as SpsProps } from "./sps";
import Shadcn, { Props as ShadcnProps } from "./shadcn";

export interface Props extends ShadcnProps, SpsProps {
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
