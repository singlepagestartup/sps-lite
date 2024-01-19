import { forwardRef } from "react";
import Sps from "./sps";
import Shadcn from "./shadcn";
import { ExtendedInputProps } from "..";

export interface Props extends ExtendedInputProps<"radio"> {
  renderOptionValue?: (value: any) => string;
  OptionComp?: React.FC<any>;
}

const ui = {
  sps: Sps,
  shadcn: Shadcn,
};

const Input = forwardRef<HTMLInputElement, Props>((props, passedRef) => {
  const Comp = ui[props.ui] ?? "input";

  return <Comp {...props} className={props.className ?? undefined} />;
});

export default Input;
