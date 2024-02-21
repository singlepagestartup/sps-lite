import { IComponentProps as IDefaultComponentProps } from "@sps/sps-ecommerce-product-frontend-component-sps-lite-variants-default";
import { IComponentProps as IIdFromUrlComponentProps } from "@sps/sps-ecommerce-product-frontend-component-sps-lite-variants-id-from-url";
import { IComponentProps as IInCartComponentProps } from "@sps/sps-ecommerce-product-frontend-component-sps-lite-variants-in-cart";
import { IComponentProps as IListComponentProps } from "@sps/sps-ecommerce-product-frontend-component-sps-lite-variants-list";

export type IComponentProps =
  | IIdFromUrlComponentProps
  | IDefaultComponentProps
  | IInCartComponentProps
  | IListComponentProps;
