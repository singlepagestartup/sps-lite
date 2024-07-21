import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/sdk/model";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/sdk/model";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  heroSectionBlock: IHeroSectionBlock;
}
