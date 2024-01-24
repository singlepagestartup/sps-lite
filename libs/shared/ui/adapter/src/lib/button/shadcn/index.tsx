import { forwardRef } from "react";
import { Button as ShadcnButton, ButtonProps } from "@sps/shadcn";

export interface Props extends ButtonProps {}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <ShadcnButton {...props} ref={ref} />;
});

export default Button;
