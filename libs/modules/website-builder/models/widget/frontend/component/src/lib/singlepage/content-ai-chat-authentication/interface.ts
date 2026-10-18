import type {
  IComponentPropsExtended as IParentExtended,
  IComponentProps as IParent,
} from "@sps/shared-frontend-components/singlepage/default/interface";
import type { IModel } from "@sps/website-builder/models/widget/sdk/model";
import type { IconName } from "@sps/ui-adapter";
import type { ReactNode } from "react";

export interface IAuthenticationContent {
  intro: { title: string; paragraphs: string[] };
  images: { src: string; alt: string; assetId: string }[];
  aside: { title: string; paragraphs: string[] };
}
export interface IAuthenticationContentProps {
  language?: string;
  content?: IAuthenticationContent;
  children?: ReactNode;
  media?: "cover" | "stack";
  asideIcon?: IconName;
}
export const variant = "content-ai-chat-authentication" as const;
export interface IComponentProps
  extends IParent<IModel, typeof variant>,
    IAuthenticationContentProps {}
export interface IComponentPropsExtended
  extends IParentExtended<IModel, typeof variant, IComponentProps> {}

export interface IParagraphsProps {
  paragraphs: string[];
  language: string;
}
export type IAuthenticationLinkProps = import("react").ComponentProps<"a">;

export interface IAuthenticationPresentationProps
  extends IAuthenticationContentProps {
  data: IModel;
  className?: string;
  variant:
    | "content-ai-chat-authentication"
    | "content-ai-chat-registration"
    | "content-ai-chat-forgot-password"
    | "content-ai-chat-reset-password";
}
