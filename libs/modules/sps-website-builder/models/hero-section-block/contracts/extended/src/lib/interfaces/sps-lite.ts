import { IRelation as IHeroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-arrays-contracts";
import type { IModel as IParentModel } from "@sps/sps-website-builder-models-hero-section-block-contracts";

export interface IModel extends IParentModel {
  heroSectionBlocksToButtonsArrays: IHeroSectionBlocksToButtonsArrays[];
}
