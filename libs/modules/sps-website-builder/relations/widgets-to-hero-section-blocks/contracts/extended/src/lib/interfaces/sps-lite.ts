import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  heroSectionBlock: IHeroSectionBlock;
}
