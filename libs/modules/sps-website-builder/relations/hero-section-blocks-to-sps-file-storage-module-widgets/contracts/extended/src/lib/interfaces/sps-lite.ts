import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/contracts/root";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/sdk/model";

export interface IRelation extends IParentRelation {
  heroSectionBlock: IHeroSectionBlock;
}
