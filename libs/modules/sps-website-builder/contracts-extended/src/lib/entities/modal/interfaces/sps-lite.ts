import type { IEntity as IParentEntity } from "@sps/sps-website-builder-contracts/lib/entities/modal/interfaces";
import type { IComponent as IPageBlock } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/interfaces";

export interface IEntity extends IParentEntity {
  pageBlocks?: IPageBlock[] | null;
}
