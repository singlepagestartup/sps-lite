import { IModel as IParentModel } from "@sps/sps-website-builder-models-footer-block-contracts";
import type { IModel as IButtonsArray } from "@sps/sps-website-builder-models-buttons-array-contracts";
import type { IModel as ILogotype } from "@sps/sps-website-builder-models-logotype-contracts";

export interface IModel extends IParentModel {
  logotype: ILogotype | null;
  buttonsArrays: IButtonsArray[] | null;
  additionalButtonsArrays: IButtonsArray[] | null;
  extraButtonsArrays: IButtonsArray[] | null;
}
