import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/order-product/interfaces";
import type { IModel as IOrder } from "@sps/sps-ecommerce-contracts/lib/models/order/interfaces";
import type { IModel as IProduct } from "@sps/sps-ecommerce-contracts/lib/models/product/interfaces";
import type { IModel as IAttribute } from "@sps/sps-ecommerce-contracts/lib/models/attribute/interfaces";

export interface IModel extends IParentModel {
  order?: IOrder | null;
  product?: IProduct | null;
  attributes?: IAttribute[] | null;
}
