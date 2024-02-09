import { forwardRef } from "react";
import Sps, { Props as SpsProps } from "./sps";
import Shadcn, { Props as ShadcnProps } from "./shadcn";

export type Props =
  | ({
      ui: "shadcn";
    } & ShadcnProps)
  | ({
      ui: "sps";
    } & SpsProps);

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  if (props.ui === "shadcn") {
    return <Shadcn {...props} ref={ref} />;
  }

  return <Sps {...props} ref={ref} />;
});

export default Button;
