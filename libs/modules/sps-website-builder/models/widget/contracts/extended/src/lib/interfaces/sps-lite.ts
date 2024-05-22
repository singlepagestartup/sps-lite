import { IRelation as IWidgetsToStartupModuleWidgets } from "@sps/sps-website-builder-relations-widgets-to-startup-module-widgets-contracts";
import type { IModel as IParentModel } from "@sps/sps-website-builder-models-widget-contracts";
import { IRelation as IWidgetToHeroSectionBlock } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts";
import { IRelation as IWidgetToNavbarBlock } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-contracts";
import { IRelation as IWidgetToFooterBlock } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-contracts";
import { IRelation as IWidgetToSliderBlock } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-contracts";
import { IRelation as IWidgetToFeaturesSectionBlock } from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-contracts";
import { IRelation as IFooterToWidget } from "@sps/sps-website-builder-relations-footers-to-widgets-contracts";
import { IRelation as INavbarToWidget } from "@sps/sps-website-builder-relations-navbars-to-widgets-contracts";
import { IRelation as IPageToWidget } from "@sps/sps-website-builder-relations-pages-to-widgets-contracts";

export interface IModel extends IParentModel {
  widgetsToStartupModuleWidgets: IWidgetsToStartupModuleWidgets[];
  widgetsToHeroSectionBlocks: IWidgetToHeroSectionBlock[];
  widgetsToNavbarBlocks: IWidgetToNavbarBlock[];
  footersToWidgets: IFooterToWidget[];
  navbarsToWidgets: INavbarToWidget[];
  pagesToWidgets: IPageToWidget[];
  widgetsToFooterBlocks: IWidgetToFooterBlock[];
  widgetsToSliderBlocks: IWidgetToSliderBlock[];
  widgetsToFeaturesSectionBlocks: IWidgetToFeaturesSectionBlock[];
}
