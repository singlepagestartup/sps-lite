import type { IModel as IParentModel } from "@sps/sps-website-builder-models-widget-contracts";
import { IModel as IWidgetsToHeroSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts";
import { IRelation as IWidgetsToNavbarBlocks } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-contracts";

export interface IModel extends IParentModel {
  SPSWBWidgetsToHeroSectionBlocks: IWidgetsToHeroSectionBlocks[];
  SPSWBWidgetsToNavbarBlocks: IWidgetsToNavbarBlocks[];
}
