import type { IEntity as IParentEntity } from "@sps/sps-website-builder-contracts/lib/entities/page/interfaces";
import { IComponent as IPageBlock } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/interfaces";
import type { IEntity as ILayout } from "@sps/sps-website-builder-contracts/lib/entities/layout/interfaces";
import type { IEntity as IMetatag } from "@sps/sps-website-builder-contracts/lib/entities/metatag/interfaces";

export interface IEntity extends IParentEntity {
  pageBlocks?: IPageBlock[] | null;
  layout?: ILayout | null;
  metatag?: IMetatag | null;
}
