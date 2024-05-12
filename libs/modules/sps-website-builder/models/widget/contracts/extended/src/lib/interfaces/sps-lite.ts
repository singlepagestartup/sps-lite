import type { IModel as IParentModel } from "@sps/sps-website-builder-models-widget-contracts";
import { IModel as IWidgetsToHeroSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts";
import { IRelation as IWidgetsToNavbarBlocks } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-contracts";
import { IRelation as IWidgetsToFooterBlocks } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-contracts";
import { IRelation as IWidgetsToSliderBlock } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-contracts";

export interface IModel extends IParentModel {
  SPSWBWidgetsToHeroSectionBlocks: IWidgetsToHeroSectionBlocks[];
  SPSWBWidgetsToNavbarBlocks: IWidgetsToNavbarBlocks[];
  SPSWBWidgetsToFooterBlocks: IWidgetsToFooterBlocks[];
  SPSWBWidgetsToSliderBlock: IWidgetsToSliderBlock[];
}
