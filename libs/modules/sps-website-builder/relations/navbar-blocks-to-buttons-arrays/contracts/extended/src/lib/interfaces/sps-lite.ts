import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-arrays-contracts";
import { IModel as INavbarBlock } from "@sps/sps-website-builder-models-navbar-block-contracts";

import { IModel as IButtonsArray } from "@sps/sps-website-builder-models-buttons-array-contracts";

export interface IRelation extends IParentRelation {
  navbarBlock: INavbarBlock;

  buttonsArray: IButtonsArray;
}
