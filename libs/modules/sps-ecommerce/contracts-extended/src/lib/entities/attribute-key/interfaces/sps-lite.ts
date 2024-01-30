import type { IEntity as IParentEntity } from "@sps/sps-ecommerce-contracts/lib/entities/attribute-key/interfaces";
import type { IEntity as IAttribute } from "@sps/sps-ecommerce-contracts/lib/entities/attribute/interfaces";

export interface IEntity extends IParentEntity {
  attributes?: IAttribute[] | null;
}