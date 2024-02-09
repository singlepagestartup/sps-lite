import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/modal/interfaces";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/interfaces";

type IPageBlock = IHeroSectionBlock;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
