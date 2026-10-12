import type { IModel } from "@sps/knowledge/models/source/sdk/model";
import type {
  IComponentProps as IParent,
  IComponentPropsExtended as IParentExtended,
} from "@sps/shared-frontend-components/singlepage/default/interface";
export const variant = "id-sidebar-ai-chat" as const;
export interface IComponentProps extends IParent<IModel, typeof variant> {}
export interface IComponentPropsExtended
  extends IParentExtended<IModel, typeof variant, IComponentProps> {}
