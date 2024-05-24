import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-arrays-contracts";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";

import { IModel as IButtonsArray } from "@sps/sps-website-builder-models-buttons-array-contracts";

export interface IRelation extends IParentRelation {
  heroSectionBlock: IHeroSectionBlock;

  buttonsArray: IButtonsArray;
}
