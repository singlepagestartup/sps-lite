"use client";

import {
  Component as EmailAndPasswordAuthenticationForm,
  type ILoginProps,
} from "../../email-and-password/authentication-form/ai-chat";

export interface ISelectMethodAiChatProps extends ILoginProps {}

export function Component({
  variant = "authentication-select-method-ai-chat",
  ...props
}: ISelectMethodAiChatProps = {}) {
  return <EmailAndPasswordAuthenticationForm {...props} variant={variant} />;
}
