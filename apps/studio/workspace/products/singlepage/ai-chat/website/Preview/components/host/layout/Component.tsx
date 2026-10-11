import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/ai-chat-dashboard/index";
import { Component as Variant1 } from "./singlepage/ai-chat-landing/index";
const variants = { "ai-chat-dashboard": Variant0, "ai-chat-landing": Variant1 };
type Props = {
  [V in keyof typeof variants]: { variant: V } & ComponentProps<
    (typeof variants)[V]
  >;
}[keyof typeof variants];
export function Component(props: Props) {
  const View = variants[props.variant] as ComponentType<Props>;
  return <View {...props} />;
}
