import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/flyout/interfaces";
import type { IModel as IButton } from "@sps/sps-website-builder-button-contracts";
import type { IModel as IButtonsArray } from "@sps/sps-website-builder-buttons-array-contracts";

type IPageBlock = IButton | IButtonsArray;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
