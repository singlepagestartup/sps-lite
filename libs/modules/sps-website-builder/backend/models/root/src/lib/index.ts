import { model as pagesToFooters } from "@sps/sps-website-builder-relations-pages-to-footers-backend-model";
import { model as pagesToNavbars } from "@sps/sps-website-builder-relations-pages-to-navbars-backend-model";
import { model as footer } from "@sps/sps-website-builder-models-footer-backend-model";
import { model as navbar } from "@sps/sps-website-builder-models-navbar-backend-model";
import { model as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-backend-model";
import { model as heroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-backend-model";
import { model as pagesToWidgets } from "@sps/sps-website-builder-relations-pages-to-widgets-backend-model";
import { model as widget } from "@sps/sps-website-builder-models-widget-backend-model";
import { model as pagesToLayouts } from "@sps/sps-website-builder-relations-pages-to-layouts-backend-model";
import { model as layout } from "@sps/sps-website-builder-models-layout-backend-model";
import { model as page } from "@sps/sps-website-builder-models-page-backend-model";

export const models = {
  pagesToFooters,
  pagesToNavbars,
  footer,
  navbar,
  widgetsToHeroSectionBlocks,
  heroSectionBlock,
  pagesToWidgets,
  widget,
  pagesToLayouts,
  layout,
  page,
};
