import type { IModel as IParentModel } from "@sps/sps-website-builder-footer-contracts";
import type { IModel as IFooterBlock } from "@sps/sps-website-builder-footer-block-contracts";

type IPageBlock = IFooterBlock;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
