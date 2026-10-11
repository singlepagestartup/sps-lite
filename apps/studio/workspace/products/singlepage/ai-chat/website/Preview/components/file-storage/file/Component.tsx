import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/list/item/pending/ai-chat/index";
import { Component as Variant1 } from "./singlepage/list/attachments/ai-chat/index";
import { Component as Variant2 } from "./singlepage/list/item/asset/ai-chat/index";
import { Component as Variant3 } from "./singlepage/overview/ai-chat/index";
const variants = {
  "list-item-pending-ai-chat": Variant0,
  "list-attachments-ai-chat": Variant1,
  "list-item-asset-ai-chat": Variant2,
  "overview-ai-chat": Variant3,
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
