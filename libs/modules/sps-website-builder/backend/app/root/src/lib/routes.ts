import { app as pagesToMetadata } from "@sps/sps-website-builder-relations-pages-to-metadata-backend-app";
import { app as metadataToSpsFileStorageModuleFiles } from "@sps/sps-website-builder-relations-metadata-to-sps-file-storage-module-files-backend-app";
import { app as metadata } from "@sps/sps-website-builder-models-metadata-backend-app";
import { app as slidesToButtonsArrays } from "@sps/sps-website-builder-relations-slides-to-buttons-arrays-backend-app";
import { app as widgetsToSpsRbacModuleWidgets } from "@sps/sps-website-builder-relations-widgets-to-sps-rbac-module-widgets-backend-app";
import { app as slidesToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-slides-to-sps-file-storage-module-widgets-backend-app";
import { app as heroSectionBlocksToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-hero-section-blocks-to-sps-file-storage-widgets-backend-app";
import { app as logotypesToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-logotypes-to-sps-file-storage-widgets-backend-app";
import { app as footerBlocksToButtonsArrays } from "@sps/sps-website-builder-relations-footer-blocks-to-buttons-arrays-backend-app";
import { app as buttonsArraysToButtons } from "@sps/sps-website-builder-relations-buttons-arrays-to-buttons-backend-app";
import { app as heroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-arrays-backend-app";
import { app as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-arrays-backend-app";
import { app as buttonsArray } from "@sps/sps-website-builder-models-buttons-array-backend-app";
import { app as footerBlocksToLogotypes } from "@sps/sps-website-builder-relations-footer-blocks-to-logotypes-backend-app";

import { app as widgetsToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder-relations-widgets-to-sps-file-storage-module-widgets-backend-app";
import { app as widgetsToStartupModuleWidgets } from "@sps/sps-website-builder-relations-widgets-to-startup-module-widgets-backend-app";

import { app as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder-relations-features-section-blocks-to-features-backend-app";
import { app as widgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-backend-app";
import { app as feature } from "@sps/sps-website-builder-models-feature-backend-app";
import { app as featuresSectionBlock } from "@sps/sps-website-builder-models-features-section-block-backend-app";
import { app as navbarBlocksToLogotypes } from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-backend-app";
import { app as logotype } from "@sps/sps-website-builder-models-logotype-backend-app";

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
  "/pages-to-metadata": pagesToMetadata,
  "/metadata-to-sps-file-storage-module-files":
    metadataToSpsFileStorageModuleFiles,
  "/metadata": metadata,
  "/slides-to-buttons-arrays": slidesToButtonsArrays,
  "/widgets-to-sps-rbac-module-widgets": widgetsToSpsRbacModuleWidgets,
  "/slides-to-sps-file-storage-module-widgets": slidesToSpsFileStorageWidgets,
  "/hero-section-blocks-to-sps-file-storage-widgets":
    heroSectionBlocksToSpsFileStorageWidgets,
  "/logotypes-to-sps-file-storage-widgets": logotypesToSpsFileStorageWidgets,
  "/footer-blocks-to-buttons-arrays": footerBlocksToButtonsArrays,
  "/buttons-arrays-to-buttons": buttonsArraysToButtons,
  "/hero-section-blocks-to-buttons-arrays": heroSectionBlocksToButtonsArrays,
  "/navbar-blocks-to-buttons-arrays": navbarBlocksToButtonsArrays,
  "/buttons-arrays": buttonsArray,
  "/footer-blocks-to-logotypes": footerBlocksToLogotypes,

  "/widgets-to-sps-file-storage-module-widgets":
    widgetsToSpsFileStorageModuleWidgets,
  "/widgets-to-startup-module-widgets": widgetsToStartupModuleWidgets,

  "/features-section-blocks-to-features": featuresSectionBlocksToFeatures,
  "/widgets-to-features-section-blocks": widgetsToFeaturesSectionBlocks,
  "/features": feature,
  "/features-section-blocks": featuresSectionBlock,
  "/navbar-blocks-to-logotypes": navbarBlocksToLogotypes,
  "/logotypes": logotype,
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
