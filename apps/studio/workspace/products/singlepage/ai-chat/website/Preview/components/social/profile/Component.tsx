import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/select/ai-chat/project/index";
import { Component as Variant1 } from "./singlepage/create/ai-chat/project/index";
import { Component as Variant2 } from "./singlepage/processing/ai-chat/project/index";
import { Component as Variant3 } from "./singlepage/overview/ai-chat/project/index";
import { Component as Variant4 } from "./singlepage/settings/ai-chat/project/index";
import { Component as Variant5 } from "./singlepage/account-menu/index";
import { Component as Variant6 } from "./singlepage/agent/select/ai-chat/index";
import { Component as Variant7 } from "./singlepage/agent/overview/ai-chat/index";
import { Component as Variant8 } from "./singlepage/agent/avatar/ai-chat/index";
const variants = {
  "select-ai-chat-project": Variant0,
  "create-ai-chat-project": Variant1,
  "processing-ai-chat-project": Variant2,
  "overview-ai-chat-project": Variant3,
  "settings-ai-chat-project": Variant4,
  "account-menu": Variant5,
  "agent-select-ai-chat": Variant6,
  "agent-overview-ai-chat": Variant7,
  "agent-avatar-ai-chat": Variant8,
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
