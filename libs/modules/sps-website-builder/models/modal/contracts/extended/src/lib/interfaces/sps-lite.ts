import type { IModel as IParentModel } from "@sps/sps-website-builder-models-modal-contracts";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-button-contracts";

type IPageBlock = IHeroSectionBlock;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
