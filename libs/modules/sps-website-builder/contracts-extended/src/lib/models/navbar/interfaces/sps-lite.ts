import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/navbar/interfaces";
import type { IModel as ILogotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/interfaces";
import type { IModel as INavbarBlock } from "@sps/sps-website-builder-contracts/lib/models/navbar-block/interfaces";

type IPageBlock = INavbarBlock;

export interface IModel extends IParentModel {
  logotype?: ILogotype | null;
  pageBlocks?: IPageBlock[] | null;
}
