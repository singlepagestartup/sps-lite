import { ISpsComponentBase } from "@sps/ui-adapter";
import { IModel as ISocialModuleChat } from "@sps/social/models/chat/sdk/model";

export const variant =
  "me-social-module-profile-chat-overview-default" as const;
export interface IComponentProps extends ISpsComponentBase {
  language: string;
  variant: typeof variant;
  socialModuleChatId: ISocialModuleChat["id"];
  socialModuleThreadId?: string;
}
