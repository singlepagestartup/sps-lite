import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/navbar/interfaces";
import { IModel as ILogotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/interfaces";
import { IModel as IPageBlock } from "@sps/sps-website-builder-contracts/lib/models/interfaces";

export interface IModel extends IParentModel {
  logotype?: ILogotype | null;
  pageBlocks?: IPageBlock[] | null;
}
