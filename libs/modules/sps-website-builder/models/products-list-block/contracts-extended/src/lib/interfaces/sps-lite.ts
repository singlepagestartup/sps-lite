import type { IModel as IParentModel } from "@sps/sps-website-builder-products-list-block-contracts";
import type { IModel as IProduct } from "@sps/sps-ecommerce-product-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-button-contracts";

export interface IModel extends IParentModel {
  buttons?: IButton[] | null;
  products?: IProduct[] | null;
}
