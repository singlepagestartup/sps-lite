import { forwardRef } from "react";
// import Sps from "./sps";
import Shadcn, { Props as ShadcnProps } from "./shadcn";
// import { ExtendedInputProps } from "..";

const ui = {
  shadcn: Shadcn,
  //   sps: Sps,
};

export interface Props extends ShadcnProps {
  ui: keyof typeof ui;
}

const Input = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const Comp = ui[props.ui] ?? "button";

  return <Comp {...props} ref={ref} />;
});

export default Input;
