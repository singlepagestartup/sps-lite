import type { IEntity as IParentEntity } from "@sps/sps-website-builder-contracts/lib/entities/navbar/interfaces";
import { IComponent as ILogotype } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/interfaces";
import { IComponent as IPageBlock } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/interfaces";

export interface IEntity extends IParentEntity {
  logotype?: ILogotype | null;
  pageBlocks?: IPageBlock[] | null;
}
