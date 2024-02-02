import type { IModel as IParentEntity } from "@sps/sps-website-builder-contracts/lib/models/topbar/interfaces";
import { IModel as IPageBlock } from "@sps/sps-website-builder-contracts/lib/models/interfaces";

export interface IEntity extends IParentEntity {
  pageBlocks?: IPageBlock[] | null;
}
