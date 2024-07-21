import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/contracts/root";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/sdk/model";

import { IModel as IButtonsArray } from "@sps/sps-website-builder/models/buttons-array/sdk/model";

export interface IRelation extends IParentRelation {
  heroSectionBlock: IHeroSectionBlock;
  buttonsArray: IButtonsArray;
}
