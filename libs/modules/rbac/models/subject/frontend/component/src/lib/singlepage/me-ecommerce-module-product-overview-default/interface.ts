import type { ISpsComponentBase } from "@sps/ui-adapter";
import type { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";
export const variant = "me-ecommerce-module-product-overview-default" as const;
export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  product: IProduct;
  store?: import("@sps/ecommerce/models/store/sdk/model").IModel;
  language: string;
}
export interface IProductDetailProps extends ISpsComponentBase {
  data: IProduct;
  language: string;
  variant?: string;
}
