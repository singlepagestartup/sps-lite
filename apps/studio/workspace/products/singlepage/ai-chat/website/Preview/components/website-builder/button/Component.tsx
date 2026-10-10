import { forwardRef } from "react";
import type { ComponentProps, ComponentType, RefAttributes } from "react";
import { Component as Variant0 } from "./singlepage/control/index";
import { Component as Variant1 } from "./singlepage/link/index";
import { Component as Variant2 } from "./singlepage/secondary/index";
import { Component as Variant3 } from "./singlepage/primary/index";
import { Component as Variant4 } from "./singlepage/navbar/ai-chat/index";
const variants = {
  control: Variant0,
  link: Variant1,
  secondary: Variant2,
  primary: Variant3,
  "navbar-ai-chat": Variant4,
};
type Props = {
  [V in keyof typeof variants]: { variant: V } & ComponentProps<
    (typeof variants)[V]
  >;
}[keyof typeof variants];
export const Component = forwardRef<HTMLButtonElement, Props>(
  function Component(props, ref) {
    const View = variants[props.variant] as ComponentType<
      Props & RefAttributes<HTMLButtonElement>
    >;
    return <View {...props} ref={ref} />;
  },
);
