import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-footer-blocks-to-buttons-arrays-contracts";
import { IModel as IFooterBlock } from "@sps/sps-website-builder-models-footer-block-contracts";

import { IModel as IButtonsArray } from "@sps/sps-website-builder-models-buttons-array-contracts";

export interface IRelation extends IParentRelation {
  footerBlock: IFooterBlock;

  buttonsArray: IButtonsArray;
}
