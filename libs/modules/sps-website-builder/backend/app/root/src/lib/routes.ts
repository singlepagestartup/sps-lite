import { app as widgetsToStartupModuleWidgets } from "@sps/sps-website-builder-relations-widgets-to-startup-module-widgets-backend-app";
import { app as widgetsToModules } from "@sps/sps-website-builder-relations-widgets-to-modules-backend-app";
import { app as heroSectionBlocksToFiles } from "@sps/sps-website-builder-relations-hero-section-blocks-to-files-backend-app";
import { app as logotypesToFiles } from "@sps/sps-website-builder-relations-logotypes-to-files-backend-app";
import { app as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder-relations-features-section-blocks-to-features-backend-app";
import { app as widgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-backend-app";
import { app as feature } from "@sps/sps-website-builder-models-feature-backend-app";
import { app as featuresSectionBlock } from "@sps/sps-website-builder-models-features-section-block-backend-app";
import { app as navbarBlocksToLogotypes } from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-backend-app";
import { app as logotype } from "@sps/sps-website-builder-models-logotype-backend-app";
import { app as heroSectionBlocksToButtons } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-backend-app";
import { app as navbarBlocksToButtons } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-backend-app";
import { app as button } from "@sps/sps-website-builder-models-button-backend-app";
import { app as slidersToSlides } from "@sps/sps-website-builder-relations-sliders-to-slides-backend-app";
import { app as sliderBlocksToSliders } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-backend-app";
import { app as slide } from "@sps/sps-website-builder-models-slide-backend-app";
import { app as slider } from "@sps/sps-website-builder-models-slider-backend-app";
import { app as widgetsToSliderBlocks } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-backend-app";
import { app as sliderBlock } from "@sps/sps-website-builder-models-slider-block-backend-app";
import { app as widgetsToFooterBlocks } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-backend-app";
import { app as footersToWidgets } from "@sps/sps-website-builder-relations-footers-to-widgets-backend-app";
import { app as widgetsToNavbarBlocks } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-backend-app";
import { app as footerBlock } from "@sps/sps-website-builder-models-footer-block-backend-app";
import { app as navbarBlock } from "@sps/sps-website-builder-models-navbar-block-backend-app";
import { app as navbarsToWidgets } from "@sps/sps-website-builder-relations-navbars-to-widgets-backend-app";
import { app as layoutsToNavbars } from "@sps/sps-website-builder-relations-layouts-to-navbars-backend-app";
import { app as layoutsToFooters } from "@sps/sps-website-builder-relations-layouts-to-footers-backend-app";
import { app as footer } from "@sps/sps-website-builder-models-footer-backend-app";
import { app as navbar } from "@sps/sps-website-builder-models-navbar-backend-app";
import { app as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-backend-app";
import { app as heroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-backend-app";
import { app as pagesToWidgets } from "@sps/sps-website-builder-relations-pages-to-widgets-backend-app";
import { app as widget } from "@sps/sps-website-builder-models-widget-backend-app";
import { app as pagesToLayouts } from "@sps/sps-website-builder-relations-pages-to-layouts-backend-app";
import { app as layout } from "@sps/sps-website-builder-models-layout-backend-app";
import { app as pages } from "@sps/sps-website-builder-models-page-backend-app";

export const routes = {
  "/widgets-to-startup-module-widgets": widgetsToStartupModuleWidgets,
  "/widgets-to-modules": widgetsToModules,
  "/hero-section-blocks-to-files": heroSectionBlocksToFiles,
  "/logotypes-to-files": logotypesToFiles,
  "/features-section-blocks-to-features": featuresSectionBlocksToFeatures,
  "/widgets-to-features-section-blocks": widgetsToFeaturesSectionBlocks,
  "/features": feature,
  "/features-section-blocks": featuresSectionBlock,
  "/navbar-blocks-to-logotypes": navbarBlocksToLogotypes,
  "/logotypes": logotype,
  "/hero-section-blocks-to-buttons": heroSectionBlocksToButtons,
  "/navbar-blocks-to-buttons": navbarBlocksToButtons,
  "/buttons": button,
  "/sliders-to-slides": slidersToSlides,
  "/slider-blocks-to-sliders": sliderBlocksToSliders,
  "/slides": slide,
  "/sliders": slider,
  "/widgets-to-slider-blocks": widgetsToSliderBlocks,
  "/slider-blocks": sliderBlock,
  "/widgets-to-footer-blocks": widgetsToFooterBlocks,
  "/footers-to-widgets": footersToWidgets,
  "/widgets-to-navbar-blocks": widgetsToNavbarBlocks,
  "/footer-blocks": footerBlock,
  "/navbar-blocks": navbarBlock,
  "/navbars-to-widgets": navbarsToWidgets,
  "/layouts-to-navbars": layoutsToNavbars,
  "/layouts-to-footers": layoutsToFooters,
  "/footers": footer,
  "/navbars": navbar,
  "/widgets-to-hero-section-blocks": widgetsToHeroSectionBlocks,
  "/hero-section-blocks": heroSectionBlock,
  "/pages-to-widgets": pagesToWidgets,
  "/widgets": widget,
  "/pages-to-layouts": pagesToLayouts,
  "/layouts": layout,
  "/pages": pages,
};
