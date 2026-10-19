import type { ISpsComponentBase } from "@sps/ui-adapter";
export const variant = "me-navigation-controls-ai-chat" as const;
export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  language: string;
  profileId?: string;
  chatId?: string;
  settingsSelected?: boolean;
}
