import type { IModel as IParentModel } from "@sps/sps-website-builder-models-slide-over-contracts";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";

type IPageBlock = IHeroSectionBlock;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
