import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/sidebar/interfaces";
import type { IModel as IPageBlock } from "@sps/sps-website-builder-contracts/lib/models/interfaces";

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
