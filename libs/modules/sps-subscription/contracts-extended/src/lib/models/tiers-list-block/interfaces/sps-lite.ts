import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/tiers-list-block/interfaces";
import type { IModel as ITier } from "@sps/sps-subscription-contracts/lib/models/tier/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  tiers?: ITier[] | null;
}
