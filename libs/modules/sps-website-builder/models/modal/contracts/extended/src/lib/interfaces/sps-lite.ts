import type { IModel as IParentModel } from "@sps/sps-website-builder/models/modal/contracts/root";
import type { IModel as IButton } from "@sps/sps-website-builder/models/button/sdk/model";

type IPageBlock = IButton;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
}
