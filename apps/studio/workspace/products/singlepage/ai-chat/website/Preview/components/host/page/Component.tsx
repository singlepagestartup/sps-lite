import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/ai-chat/index";
import { Component as Variant1 } from "./singlepage/ai-chat-help/index";
import { Component as Variant2 } from "./singlepage/rbac-module-subject-me-authentication-registration-ai-chat/index";
import { Component as Variant3 } from "./singlepage/rbac-module-subject-me-authentication-select-method-ai-chat/index";
import { Component as Variant4 } from "./singlepage/rbac-module-subject-me-settings-ai-chat/index";
import { Component as Variant5 } from "./singlepage/rbac-module-subject-me-ecommerce-module-order-checkout-tokens-ai-chat/index";
import { Component as Variant6 } from "./singlepage/rbac-module-subject-me-social-module-profile-create-ai-chat/index";
import { Component as Variant7 } from "./singlepage/rbac-module-subject-me-social-module-profile-id-chat-id-thread-id-ai-chat/index";
import { Component as Variant8 } from "./singlepage/rbac-module-subject-me-social-module-profile-id-settings-ai-chat/index";
import { Component as Variant9 } from "./singlepage/rbac-module-subject-me-social-module-profile-id-chat-id-thread-create-ai-chat/index";
const variants = {
  "ai-chat": Variant0,
  "ai-chat-help": Variant1,
  "rbac-module-subject-me-authentication-registration-ai-chat": Variant2,
  "rbac-module-subject-me-authentication-select-method-ai-chat": Variant3,
  "rbac-module-subject-me-settings-ai-chat": Variant4,
  "rbac-module-subject-me-ecommerce-module-order-checkout-tokens-ai-chat":
    Variant5,
  "rbac-module-subject-me-social-module-profile-create-ai-chat": Variant6,
  "rbac-module-subject-me-social-module-profile-id-chat-id-thread-id-ai-chat":
    Variant7,
  "rbac-module-subject-me-social-module-profile-id-settings-ai-chat": Variant8,
  "rbac-module-subject-me-social-module-profile-id-chat-id-thread-create-ai-chat":
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
