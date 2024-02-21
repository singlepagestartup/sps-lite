import { IComponentProps as IDefaultComponentProps } from "@sps/sps-ecommerce-models-order-frontend-component-variants-sps-lite-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-ecommerce-models-order-frontend-component-variants-sps-lite-list";
import { IComponentProps as ICheckoutComponentProps } from "@sps/sps-ecommerce-models-order-frontend-component-variants-sps-lite-checkout";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | ICheckoutComponentProps;
