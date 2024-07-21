import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/contracts/root";
import { IModel as IFooterBlock } from "@sps/sps-website-builder/models/footer-block/sdk/model";
import { IModel as IButtonsArray } from "@sps/sps-website-builder/models/buttons-array/sdk/model";

export interface IRelation extends IParentRelation {
  footerBlock: IFooterBlock;

  buttonsArray: IButtonsArray;
}
