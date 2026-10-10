import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/content/ai-chat/help/index";
import { Component as Variant1 } from "./singlepage/content/ai-chat/hero/index";
import { Component as Variant2 } from "./singlepage/content/ai-chat/try/index";
import { Component as Variant3 } from "./singlepage/content/ai-chat/continue/index";
import { Component as Variant4 } from "./singlepage/navbar/ai-chat/index";
import { Component as Variant5 } from "./singlepage/footer/ai-chat/index";
import { Component as Variant6 } from "./singlepage/navbar/ai-chat-landing/index";
const variants = {
  "content-ai-chat-help": Variant0,
  "content-ai-chat-hero": Variant1,
  "content-ai-chat-try": Variant2,
  "content-ai-chat-continue": Variant3,
  "navbar-ai-chat": Variant4,
  "footer-ai-chat": Variant5,
  "navbar-ai-chat-landing": Variant6,
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
