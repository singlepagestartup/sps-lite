import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/download/ai-chat/index";
import { Component as Variant1 } from "./singlepage/list/item/document/ai-chat/index";
import { Component as Variant2 } from "./singlepage/overview/document/ai-chat/index";
const variants = {
  "download-ai-chat": Variant0,
  "list-item-document-ai-chat": Variant1,
  "overview-document-ai-chat": Variant2,
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
