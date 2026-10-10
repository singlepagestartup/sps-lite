import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/ai-chat/index";
import { Component as Variant1 } from "./singlepage/ai-chat-help/index";
import { Component as Variant2 } from "./singlepage/ai-chat-rbac-subjects-authentication-registration/index";
import { Component as Variant3 } from "./singlepage/ai-chat-rbac-subjects-authentication-select-method/index";
import { Component as Variant4 } from "./singlepage/ai-chat-rbac-subjects-settings/index";
import { Component as Variant5 } from "./singlepage/ai-chat-rbac-subjects-tokens/index";
import { Component as Variant6 } from "./singlepage/ai-chat-social-profiles-create/index";
import { Component as Variant7 } from "./singlepage/ai-chat-social-profiles-social-profiles-id/index";
import { Component as Variant8 } from "./singlepage/ai-chat-social-profiles-social-profiles-id-settings/index";
import { Component as Variant9 } from "./singlepage/ai-chat-social-profiles-social-profiles-id-chats-social-chats-id-threads-create/index";
const variants = {
  "ai-chat": Variant0,
  "ai-chat-help": Variant1,
  "ai-chat-rbac-subjects-authentication-registration": Variant2,
  "ai-chat-rbac-subjects-authentication-select-method": Variant3,
  "ai-chat-rbac-subjects-settings": Variant4,
  "ai-chat-rbac-subjects-tokens": Variant5,
  "ai-chat-social-profiles-create": Variant6,
  "ai-chat-social-profiles-social-profiles-id": Variant7,
  "ai-chat-social-profiles-social-profiles-id-settings": Variant8,
  "ai-chat-social-profiles-social-profiles-id-chats-social-chats-id-threads-create":
    Variant9,
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
