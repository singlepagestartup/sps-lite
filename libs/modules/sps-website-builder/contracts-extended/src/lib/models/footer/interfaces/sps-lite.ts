import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/footer/interfaces";
import type { IModel as IFooterBlock } from "@sps/sps-website-builder-contracts/lib/models/footer-block/interfaces";

type IPageBlock = IFooterBlock;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
