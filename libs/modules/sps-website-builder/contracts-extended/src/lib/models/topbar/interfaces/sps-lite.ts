import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/topbar/interfaces";
import type { IModel as IPageBlock } from "@sps/sps-website-builder-contracts/lib/models/interfaces";

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
