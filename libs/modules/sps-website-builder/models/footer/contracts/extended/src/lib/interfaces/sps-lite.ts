import type { IModel as IParentModel } from "@sps/sps-website-builder-models-footer-contracts";
import type { IModel as IFooterBlock } from "@sps/sps-website-builder-models-footer-block-contracts";

type IPageBlock = IFooterBlock;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
