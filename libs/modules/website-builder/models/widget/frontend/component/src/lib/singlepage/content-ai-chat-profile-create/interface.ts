import type { IComponentPropsExtended as IParentExtended } from "@sps/shared-frontend-components/singlepage/default/interface";
import type { IModel } from "@sps/website-builder/models/widget/sdk/model";
import type { IComponentProps as IParent } from "@sps/shared-frontend-components/singlepage/default/interface";
export const variant = "content-ai-chat-profile-create" as const;
export interface IComponentProps extends IParent<IModel, typeof variant> {
  children?: React.ReactNode;
  appearance?: "form" | "projects";
}
export interface IComponentPropsExtended
  extends IParentExtended<IModel, typeof variant, IComponentProps> {}
