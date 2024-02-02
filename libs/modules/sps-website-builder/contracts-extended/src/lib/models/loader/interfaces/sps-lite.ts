import type { IModel as IParentEntity } from "@sps/sps-website-builder-contracts/lib/models/loader/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IEntity extends IParentEntity {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
