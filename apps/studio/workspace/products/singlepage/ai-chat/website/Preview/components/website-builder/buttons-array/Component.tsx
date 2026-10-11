import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/default/index";
import { Component as Variant1 } from "./singlepage/navbar/ai-chat/index";
const variants = { default: Variant0, "navbar-ai-chat": Variant1 };
type Props = {
  [V in keyof typeof variants]: { variant: V } & ComponentProps<
    (typeof variants)[V]
  >;
}[keyof typeof variants];
export function Component(props: Props) {
  const View = variants[props.variant] as ComponentType<Props>;
  return <View {...props} />;
}
