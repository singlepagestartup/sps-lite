import type { IModel as IParentEntity } from "@sps/sps-website-builder-contracts/lib/models/footer/interfaces";
import { IModel as IPageBlock } from "@sps/sps-website-builder-contracts/lib/models/interfaces";

export interface IEntity extends IParentEntity {
  pageBlocks?: IPageBlock[] | null;
}
