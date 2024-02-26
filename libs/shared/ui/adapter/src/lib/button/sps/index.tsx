"use client";

import { MouseEventHandler, forwardRef, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  "data-ui": "button";
  "data-ui-variant":
    | "primary"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "reset"
    | "transparent";
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const Comp = useMemo(() => {
    if (["string", "number", "boolean"].includes(typeof props.children)) {
      return "button";
    }

    return Slot;
  }, [props]);

  return (
    <Comp {...props} ref={ref} className={`button ${props?.className || ""}`}>
      {props.children}
    </Comp>
  );
});

export default Button;
