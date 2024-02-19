import type { IModel as IParentModel } from "@sps/sps-website-builder-incentives-block-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-file-contracts";
import type { IModel as IFeature } from "@sps/sps-website-builder-feature-contracts";

export interface IModel extends IParentModel {
  features?: IFeature[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
