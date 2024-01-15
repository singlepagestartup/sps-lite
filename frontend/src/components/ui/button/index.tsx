import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  "data-ui-variant"?: string;
  "data-ui-size"?: string;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-ui="button"
        data-ui-size="default"
        data-ui-variant="primary"
        {...props}
      />
    );
  },
);

export default Button;
