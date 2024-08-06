export { type IModel } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/sdk/model";
import { IModel } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/sdk/model";
import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "@sps/shared-frontend-components/singlepage/default/interface";

export const variant = "default" as const;

export interface IComponentProps
  extends IParentComponentProps<IModel, typeof variant> {}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended<
    IModel,
    typeof variant,
    IComponentProps
  > {}
