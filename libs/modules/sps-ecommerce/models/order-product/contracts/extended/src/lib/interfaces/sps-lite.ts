import type { IModel as IParentModel } from "@sps/sps-ecommerce-models-order-product-contracts";
import type { IModel as IOrder } from "@sps/sps-ecommerce-models-order-contracts";
import type { IModel as IProduct } from "@sps/sps-ecommerce-models-product-contracts";
import type { IModel as IAttribute } from "@sps/sps-ecommerce-models-attribute-contracts";

export interface IModel extends IParentModel {
  order?: IOrder | null;
  product?: IProduct | null;
  attributes?: IAttribute[] | null;
}
