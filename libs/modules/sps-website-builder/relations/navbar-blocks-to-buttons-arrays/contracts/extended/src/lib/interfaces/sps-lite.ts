import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/contracts/root";
import { IModel as INavbarBlock } from "@sps/sps-website-builder/models/navbar-block/contracts/root";

import { IModel as IButtonsArray } from "@sps/sps-website-builder/models/buttons-array/sdk/model";

export interface IRelation extends IParentRelation {
  navbarBlock: INavbarBlock;

  buttonsArray: IButtonsArray;
}
