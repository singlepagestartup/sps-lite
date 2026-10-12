import type { IComponentProps as IContentAiChatHelp } from "./content-ai-chat-help/interface";
import type { IComponentProps as ILandingAiChat } from "./landing-ai-chat/interface";
import type { IComponentProps as IContentAiChatProfileCreate } from "./content-ai-chat-profile-create/interface";
import type { IComponentProps as INavbarAiChat } from "./navbar-ai-chat/interface";
import { IComponentProps as INavbarDefaultComponentProps } from "./navbar-default/interface";

export type IComponentProps =
  | ILandingAiChat
  | IContentAiChatHelp
  | IContentAiChatProfileCreate
  | INavbarAiChat
  | INavbarDefaultComponentProps;
