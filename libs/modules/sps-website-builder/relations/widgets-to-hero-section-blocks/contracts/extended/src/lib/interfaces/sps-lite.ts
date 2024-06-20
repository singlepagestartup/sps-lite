import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/contracts/root";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/contracts/root";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  heroSectionBlock: IHeroSectionBlock;
}
