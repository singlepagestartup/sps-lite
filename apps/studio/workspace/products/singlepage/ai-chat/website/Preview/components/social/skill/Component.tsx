import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/overview/ai-chat/index";
const variants = { "overview-ai-chat": Variant0 };
type Props = {
  [V in keyof typeof variants]: { variant: V } & ComponentProps<
    (typeof variants)[V]
  >;
}[keyof typeof variants];
export function Component(props: Props) {
  const View = variants[props.variant] as ComponentType<Props>;
  return <View {...props} />;
}
