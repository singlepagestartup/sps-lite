import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/slide-over/interfaces";
import { IModel as IPageBlock } from "@sps/sps-website-builder-contracts/lib/models/interfaces";

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
