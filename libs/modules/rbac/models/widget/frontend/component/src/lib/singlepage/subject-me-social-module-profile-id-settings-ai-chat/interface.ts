import type {
  IComponentPropsExtended as IParentExtended,
  IComponentProps as IParent,
} from "@sps/shared-frontend-components/singlepage/default/interface";
import type { IModel } from "@sps/rbac/models/widget/sdk/model";

export const variant =
  "subject-me-social-module-profile-id-settings-ai-chat" as const;
export interface IComponentProps extends IParent<IModel, typeof variant> {
  language?: string;
  routeParams?: Record<string, string>;
  profileId?: string;
  chatId?: string;
  threadId?: string;
}
export interface IComponentPropsExtended
  extends IParentExtended<IModel, typeof variant, IComponentProps> {}
