import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp ref={ref} data-size="default" data-ui="button" {...props} />;
  },
);

export default Button;
