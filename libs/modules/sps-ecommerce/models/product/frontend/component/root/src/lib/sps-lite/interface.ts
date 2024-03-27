import { IComponentProps as ICheckoutFormComponentProps } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-checkout-form";
import { IComponentProps as IGetFromUrlComponentProps } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-get-from-url";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-default";

import { IComponentProps as IInCartComponentProps } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-in-cart";
import { IComponentProps as IListComponentProps } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-list";

export type IComponentProps =
  | ICheckoutFormComponentProps
  | IGetFromUrlComponentProps
  | IDefaultComponentProps
  | IInCartComponentProps
  | IListComponentProps;
