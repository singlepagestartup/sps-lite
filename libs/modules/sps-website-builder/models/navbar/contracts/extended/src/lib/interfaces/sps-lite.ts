import type { IModel as IParentModel } from "@sps/sps-website-builder-models-navbar-contracts";
import type { IModel as INavbarBlock } from "@sps/sps-website-builder-models-navbar-block-contracts";

type IPageBlock = INavbarBlock;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
