import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-contracts";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";

export interface IRelation extends IParentRelation {
  heroSectionBlock: IHeroSectionBlock;
  button: IButton;
}
