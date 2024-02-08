import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/products-list-block/interfaces";
import type { IModel as IProduct } from "@sps/sps-ecommerce-contracts/lib/models/product/interfaces";
import type { IModel as IButton } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";

export interface IModel extends IParentModel {
  buttons?: IButton[] | null;
  products?: IProduct[] | null;
}
