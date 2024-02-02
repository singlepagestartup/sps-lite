import type { IModel as IParentEntity } from "@sps/sps-website-builder-contracts/lib/models/metatag/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IEntity extends IParentEntity {
  favicon?: IFile | null;
}
