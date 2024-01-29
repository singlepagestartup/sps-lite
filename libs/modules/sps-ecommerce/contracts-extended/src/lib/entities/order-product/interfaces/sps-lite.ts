import type { IEntity as IParentEntity } from "@sps/sps-ecommerce-contracts/lib/entities/order-product/interfaces";
import type { IEntity as IOrder } from "@sps/sps-ecommerce-contracts/lib/entities/order/interfaces";
import type { IEntity as IProduct } from "@sps/sps-ecommerce-contracts/lib/entities/product/interfaces";
import type { IEntity as IAttribute } from "@sps/sps-ecommerce-contracts/lib/entities/attribute/interfaces";

export interface IEntity extends IParentEntity {
  order?: IOrder | null;
  product?: IProduct | null;
  attributes?: IAttribute[] | null;
}
