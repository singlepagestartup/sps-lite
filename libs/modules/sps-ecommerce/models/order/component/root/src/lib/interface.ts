import { IComponentProps as IDefaultComponentProps } from "@sps/sps-ecommerce-order-component-variants-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-ecommerce-order-component-variants-list";
import { IComponentProps as ICheckoutComponentProps } from "@sps/sps-ecommerce-order-component-variants-checkout";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | ICheckoutComponentProps;
