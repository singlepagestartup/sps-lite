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

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const Comp = ui[props.ui] ?? "input";

  return <Comp {...props} className={props.className ?? undefined} ref={ref} />;
});

export default Input;
