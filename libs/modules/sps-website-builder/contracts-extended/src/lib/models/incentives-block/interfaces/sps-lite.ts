import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/incentives-block/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";
import type { IModel as IFeature } from "@sps/sps-website-builder-contracts/lib/models/feature/interfaces";

export interface IModel extends IParentModel {
  features?: IFeature[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
