import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-buttons-arrays-to-buttons-contracts";
import { IModel as IButtonsArray } from "@sps/sps-website-builder-models-buttons-array-contracts";

import { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";

export interface IRelation extends IParentRelation {
  buttonsArray: IButtonsArray;

  button: IButton;
}
