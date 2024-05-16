import type { IModel as IParentModel } from "@sps/sps-website-builder-models-button-contracts";
import { IRelation as IHeroSectionBlockToButton } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-contracts";
import { IRelation as INavbarBlockToButton } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-contracts";

export interface IModel extends IParentModel {
  heroSectionBlocksToButtons: IHeroSectionBlockToButton[];
  navbarBlocksToButtons: INavbarBlockToButton[];
}
