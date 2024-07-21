import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/contracts/root";
import { IModel as IButtonsArray } from "@sps/sps-website-builder/models/buttons-array/sdk/model";
import { IModel as IButton } from "@sps/sps-website-builder/models/button/sdk/model";
export interface IRelation extends IParentRelation {
  buttonsArray: IButtonsArray;
  button: IButton;
}
