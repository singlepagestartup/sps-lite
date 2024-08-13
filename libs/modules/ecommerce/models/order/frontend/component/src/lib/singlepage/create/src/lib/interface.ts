export { type IModel } from "@sps/ecommerce/models/order/sdk/model";
import { IModel } from "@sps/ecommerce/models/order/sdk/model";
import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "@sps/shared-frontend-components/singlepage/default/interface";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "create" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {}
