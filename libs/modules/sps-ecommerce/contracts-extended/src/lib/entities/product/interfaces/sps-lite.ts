import type { IEntity as IParentEntity } from "@sps/sps-ecommerce-contracts/lib/entities/product/interfaces";
import type { IEntity as IAttribute } from "@sps/sps-ecommerce-contracts/lib/entities//attribute/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IEntity extends IParentEntity {
  attributes?: IAttribute[] | null;
  media?: IFile[] | null;
}
