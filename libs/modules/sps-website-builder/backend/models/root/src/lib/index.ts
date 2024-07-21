import { model as featuresToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/backend/model/root";
import { model as slidesToButtonsArrays } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/backend/model/root";
import { model as slidesToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/backend/model/root";
import { model as heroSectionBlocksToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/backend/model/root";
import { model as logotypesToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/backend/model/root";
import { model as footerBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/backend/model/root";
import { model as buttonsArraysToButtons } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/backend/model/root";
import { model as heroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/backend/model/root";
import { model as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/backend/model/root";
import { model as footerBlocksToLogotypes } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/backend/model/root";
import { model as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/backend/model/root";
import { model as widgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-features-section-blocks/backend/model/root";
import { model as navbarBlocksToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/backend/model/root";
import { model as logotype } from "@sps/sps-website-builder/models/logotype/backend/model/root";
import { model as slidersToSlides } from "@sps/sps-website-builder/relations/sliders-to-slides/backend/model/root";
import { model as sliderBlocksToSliders } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/backend/model/root";
import { model as slide } from "@sps/sps-website-builder/models/slide/backend/model/root";
import { model as slider } from "@sps/sps-website-builder/models/slider/backend/model/root";
import { model as widgetsToSliderBlocks } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/backend/model/root";
import { model as sliderBlock } from "@sps/sps-website-builder/models/slider-block/backend/model/root";
import { model as widgetsToFooterBlocks } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/backend/model/root";
import { model as footersToWidgets } from "@sps/sps-website-builder/relations/footers-to-widgets/backend/model/root";
import { model as widgetsToNavbarBlocks } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/backend/model/root";
import { model as footerBlock } from "@sps/sps-website-builder/models/footer-block/backend/model/root";
import { model as navbarBlock } from "@sps/sps-website-builder/models/navbar-block/backend/model/root";
import { model as navbarsToWidgets } from "@sps/sps-website-builder/relations/navbars-to-widgets/backend/model/root";
import { model as footer } from "@sps/sps-website-builder/models/footer/backend/model/root";
import { model as navbar } from "@sps/sps-website-builder/models/navbar/backend/model/root";
import { model as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/backend/model/root";
import { model as widget } from "@sps/sps-website-builder/models/widget/backend/model/root";

export const models = {
  featuresToSpsFileStorageModuleFiles,
  slidesToButtonsArrays,
  slidesToSpsFileStorageWidgets,
  heroSectionBlocksToSpsFileStorageWidgets,
  logotypesToSpsFileStorageWidgets,
  footerBlocksToButtonsArrays,
  buttonsArraysToButtons,
  heroSectionBlocksToButtonsArrays,
  navbarBlocksToButtonsArrays,
  footerBlocksToLogotypes,
  featuresSectionBlocksToFeatures,
  widgetsToFeaturesSectionBlocks,
  navbarBlocksToLogotypes,
  logotype,
  slidersToSlides,
  sliderBlocksToSliders,
  slide,
  slider,
  widgetsToSliderBlocks,
  sliderBlock,
  widgetsToFooterBlocks,
  footersToWidgets,
  widgetsToNavbarBlocks,
  footerBlock,
  navbarBlock,
  navbarsToWidgets,
  footer,
  navbar,
  widgetsToHeroSectionBlocks,
  widget,
};
