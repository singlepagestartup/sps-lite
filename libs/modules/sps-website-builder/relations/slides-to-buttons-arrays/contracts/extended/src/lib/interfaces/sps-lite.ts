import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/contracts/root";
import { IModel as ISlide } from "@sps/sps-website-builder/models/slide/contracts/root";

import { IModel as IButtonsArray } from "@sps/sps-website-builder/models/buttons-array/sdk/model";

export interface IRelation extends IParentRelation {
  slide: ISlide;

  buttonsArray: IButtonsArray;
}
