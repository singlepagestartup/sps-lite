import { IComponentProps as IDefaultComponentProps } from "@sps/sps-ecommerce-order-frontend-component-sps-lite-variants-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-ecommerce-order-frontend-component-sps-lite-variants-list";
import { IComponentProps as ICheckoutComponentProps } from "@sps/sps-ecommerce-order-frontend-component-sps-lite-variants-checkout";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | ICheckoutComponentProps;
