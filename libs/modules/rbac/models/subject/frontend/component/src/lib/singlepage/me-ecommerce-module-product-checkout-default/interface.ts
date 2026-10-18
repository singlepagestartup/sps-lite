import { ISpsComponentBase } from "@sps/ui-adapter";
import { IModel as IEcommerceProduct } from "@sps/ecommerce/models/product/sdk/model";
import { IModel as IEcommerceStore } from "@sps/ecommerce/models/store/sdk/model";

export const variant = "me-ecommerce-module-product-checkout-default" as const;
export interface IComponentProps extends ISpsComponentBase {
  product: IEcommerceProduct;
  store?: IEcommerceStore;
  language: string;
  variant: typeof variant;
}
