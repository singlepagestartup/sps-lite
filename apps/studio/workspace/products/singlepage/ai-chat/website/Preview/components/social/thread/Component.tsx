import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/message/list/ai-chat/index";
import { Component as Variant1 } from "./singlepage/create/ai-chat/index";
import { Component as Variant2 } from "./singlepage/overview/ai-chat/index";
const variants = {
  "message-list-ai-chat": Variant0,
  "create-ai-chat": Variant1,
  "overview-ai-chat": Variant2,
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
