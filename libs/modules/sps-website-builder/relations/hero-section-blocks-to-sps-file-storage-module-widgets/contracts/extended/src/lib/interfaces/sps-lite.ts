import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/contracts/root";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/contracts/root";

export interface IRelation extends IParentRelation {
  heroSectionBlock: IHeroSectionBlock;
}
