import type { IModel as IParentEntity } from "@sps/sps-website-builder-contracts/lib/models/navbar/interfaces";
import { IModel as ILogotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/interfaces";
import { IModel as IPageBlock } from "@sps/sps-website-builder-contracts/lib/models/interfaces";

export interface IEntity extends IParentEntity {
  logotype?: ILogotype | null;
  pageBlocks?: IPageBlock[] | null;
}
