import { IRelation as IFooterBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/contracts/root";
import { IRelation as IFooterBlocksToLogotypes } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/contracts/root";
import { IModel as IParentModel } from "@sps/sps-website-builder/models/footer-block/contracts/root";
import type { IModel as IButtonsArray } from "@sps/sps-website-builder/models/buttons-array/contracts/root";
import type { IModel as ILogotype } from "@sps/sps-website-builder/models/logotype/contracts/root";

export interface IModel extends IParentModel {
  footerBlocksToButtonsArrays: IFooterBlocksToButtonsArrays[];
  footerBlocksToLogotypes: IFooterBlocksToLogotypes[];
  logotype: ILogotype | null;
  buttonsArrays: IButtonsArray[] | null;
  additionalButtonsArrays: IButtonsArray[] | null;
  extraButtonsArrays: IButtonsArray[] | null;
}
