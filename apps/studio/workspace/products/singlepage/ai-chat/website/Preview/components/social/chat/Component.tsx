import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/overview/preview/ai-chat/index";
import { Component as Variant1 } from "./singlepage/overview/ai-chat/index";
const variants = {
  "overview-preview-ai-chat": Variant0,
  "overview-ai-chat": Variant1,
};
type Props = {
  [V in keyof typeof variants]: { variant: V } & ComponentProps<
    (typeof variants)[V]
  >;
}[keyof typeof variants];
export function Component(props: Props) {
  const View = variants[props.variant] as ComponentType<Props>;
  return <View {...props} />;
}
