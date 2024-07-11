"use client";

import { forwardRef } from "react";
import Shadcn, { Props as ShadcnProps } from "./shadcn";

export type Props = { ui: "shadcn" } & ShadcnProps;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <Shadcn {...props} ref={ref} />;
});

export default Button;
