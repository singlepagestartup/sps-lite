import { IRelation as IButtonsArraysToButtons } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-website-builder/models/button/contracts/root";

export interface IModel extends IParentModel {
  buttonsArraysToButtons: IButtonsArraysToButtons[];
}
