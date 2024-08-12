export { type IModel } from "@sps/sps-ecommerce/relations/widgets-to-orders-list-blocks/sdk/model";
import { IModel } from "@sps/sps-ecommerce/relations/widgets-to-orders-list-blocks/sdk/model";
import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "@sps/shared-frontend-components/singlepage/admin-select-input/interface";

export const variant = "admin-select-input" as const;

export interface IComponentProps
  extends IParentComponentProps<IModel, typeof variant> {}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended<
    IModel,
    typeof variant,
    IComponentProps
  > {}
