import { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/footer-block/interfaces";
import { IModel as IButtonsArray } from "@sps/sps-website-builder-contracts/lib/models/buttons-array/interfaces";
import { IModel as ILogotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/interfaces";

export interface IModel extends IParentModel {
  logotype: ILogotype | null;
  buttonsArrays: IButtonsArray[] | null;
  additionalButtonsArrays: IButtonsArray[] | null;
  extraButtonsArrays: IButtonsArray[] | null;
}
