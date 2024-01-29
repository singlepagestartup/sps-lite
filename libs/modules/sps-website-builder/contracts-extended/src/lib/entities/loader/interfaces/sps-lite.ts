import type { IEntity as IParentEntity } from "@sps/sps-website-builder-contracts/lib/entities/loader/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IEntity extends IParentEntity {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
