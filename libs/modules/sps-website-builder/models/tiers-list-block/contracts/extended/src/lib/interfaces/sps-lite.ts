import type { IModel as IParentModel } from "@sps/sps-website-builder-tiers-list-block-contracts";
import type { IModel as ITier } from "@sps/sps-subscription-tier-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  tiers?: ITier[] | null;
}
