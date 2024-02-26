import { IComponentProps as IDefaultComponentProps } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-default";
import { IComponentProps as IIdFromUrlComponentProps } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-id-from-url";
import { IComponentProps as IInCartComponentProps } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-in-cart";
import { IComponentProps as IListComponentProps } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-list";

export type IComponentProps =
  | IIdFromUrlComponentProps
  | IDefaultComponentProps
  | IInCartComponentProps
  | IListComponentProps;
