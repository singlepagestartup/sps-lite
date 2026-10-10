import type { ComponentProps, ComponentType } from "react";
import { Component as Variant0 } from "./singlepage/account/index";
import { Component as Variant1 } from "./singlepage/message/create/ai-chat/index";
import { Component as Variant2 } from "./singlepage/authentication/email-and-password/registration-form/ai-chat/index";
import { Component as Variant3 } from "./singlepage/authentication/email-and-password/authentication-form/ai-chat/index";
import { Component as Variant4 } from "./singlepage/me-profile-information/index";
import { Component as Variant5 } from "./singlepage/me-identity-find-information/index";
import { Component as Variant6 } from "./singlepage/account-data/index";
const variants = {
  account: Variant0,
  "message-create-ai-chat": Variant1,
  "authentication-email-and-password-registration-form-ai-chat": Variant2,
  "authentication-email-and-password-authentication-form-ai-chat": Variant3,
  "me-profile-information": Variant4,
  "me-identity-find-information": Variant5,
  "account-data": Variant6,
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
