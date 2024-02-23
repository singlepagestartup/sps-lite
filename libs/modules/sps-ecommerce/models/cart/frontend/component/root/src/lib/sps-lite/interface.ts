import { IComponentProps as ICheckoutComponentProps } from "@sps/sps-ecommerce-models-cart-frontend-component-variants-sps-lite-checkout";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-ecommerce-models-cart-frontend-component-variants-sps-lite-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-ecommerce-models-cart-frontend-component-variants-sps-lite-list";

export type IComponentProps =
  | ICheckoutComponentProps
  | IDefaultComponentProps
  | IListComponentProps;
