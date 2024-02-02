import type { IModel as IParentEntity } from "@sps/sps-website-builder-contracts/lib/models/page/interfaces";
import { IModel as IPageBlock } from "@sps/sps-website-builder-contracts/lib/models/interfaces";
import type { IModel as ILayout } from "@sps/sps-website-builder-contracts/lib/models/layout/interfaces";
import type { IModel as IMetatag } from "@sps/sps-website-builder-contracts/lib/models/metatag/interfaces";

export interface IEntity extends IParentEntity {
  pageBlocks?: IPageBlock[] | null;
  layout?: ILayout | null;
  metatag?: IMetatag | null;
}
