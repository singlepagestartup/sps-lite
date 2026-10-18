import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "me-social-module-profile-chat-list-default" as const;
export interface IComponentProps extends ISpsComponentBase {
  language: string;
  variant: typeof variant;
}
