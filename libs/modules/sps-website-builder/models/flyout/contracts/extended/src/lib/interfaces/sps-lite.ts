import type { IModel as IParentModel } from "@sps/sps-website-builder-models-flyout-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";
import type { IModel as IButtonsArray } from "@sps/sps-website-builder-models-buttons-array-contracts";

type IPageBlock = IButton | IButtonsArray;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
