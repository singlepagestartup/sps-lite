import type { ReactNode } from "react";
import type { IRouteParams } from "@sps/shared-utils";
export { type IModel } from "@sps/social/models/widget/sdk/model";
import { IModel } from "@sps/social/models/widget/sdk/model";
import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "@sps/shared-frontend-components/singlepage/default/interface";

export const variant = "chat-overview-default" as const;

export interface IComponentProps
  extends IParentComponentProps<IModel, typeof variant> {
  language: string;
  routeParams?: IRouteParams;
  renderChat?: (props: { chatId: string; threadId?: string }) => ReactNode;
}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended<
    IModel,
    typeof variant,
    IComponentProps
  > {}
