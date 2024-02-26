import type { IModel as IParentModel } from "@sps/sps-website-builder-models-incentives-block-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";
import type { IModel as IFeature } from "@sps/sps-website-builder-models-feature-contracts";

export interface IModel extends IParentModel {
  features?: IFeature[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
