import { app as featuresToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/backend/app/root";
import { app as slidesToButtonsArrays } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/backend/app/root";
import { app as slidesToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/backend/app/root";
import { app as heroSectionBlocksToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/backend/app/root";
import { app as logotypesToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/backend/app/root";
import { app as footerBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/backend/app/root";
import { app as buttonsArraysToButtons } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/backend/app/root";
import { app as heroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/backend/app/root";
import { app as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/backend/app/root";
import { app as footerBlocksToLogotypes } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/backend/app/root";
import { app as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/backend/app/root";
import { app as widgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-features-section-blocks/backend/app/root";
import { app as navbarBlocksToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/backend/app/root";
import { app as slidersToSlides } from "@sps/sps-website-builder/relations/sliders-to-slides/backend/app/root";
import { app as sliderBlocksToSliders } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/backend/app/root";
import { app as widgetsToSliderBlocks } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/backend/app/root";
import { app as widgetsToFooterBlocks } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/backend/app/root";
import { app as footersToWidgets } from "@sps/sps-website-builder/relations/footers-to-widgets/backend/app/root";
import { app as widgetsToNavbarBlocks } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/backend/app/root";
import { app as navbarsToWidgets } from "@sps/sps-website-builder/relations/navbars-to-widgets/backend/app/root";

export const routes = {
  "/features-to-sps-file-storage-module-files":
    featuresToSpsFileStorageModuleFiles,
  "/slides-to-buttons-arrays": slidesToButtonsArrays,
  "/slides-to-sps-file-storage-module-widgets": slidesToSpsFileStorageWidgets,
  "/hero-section-blocks-to-sps-file-storage-module-widgets":
    heroSectionBlocksToSpsFileStorageWidgets,
  "/logotypes-to-sps-file-storage-module-widgets":
    logotypesToSpsFileStorageWidgets,
  "/footer-blocks-to-buttons-arrays": footerBlocksToButtonsArrays,
  "/buttons-arrays-to-buttons": buttonsArraysToButtons,
  "/hero-section-blocks-to-buttons-arrays": heroSectionBlocksToButtonsArrays,
  "/navbar-blocks-to-buttons-arrays": navbarBlocksToButtonsArrays,
  "/footer-blocks-to-logotypes": footerBlocksToLogotypes,
  "/features-section-blocks-to-features": featuresSectionBlocksToFeatures,
  "/widgets-to-features-section-blocks": widgetsToFeaturesSectionBlocks,
  "/navbar-blocks-to-logotypes": navbarBlocksToLogotypes,
  "/sliders-to-slides": slidersToSlides,
  "/slider-blocks-to-sliders": sliderBlocksToSliders,
  "/widgets-to-slider-blocks": widgetsToSliderBlocks,
  "/widgets-to-footer-blocks": widgetsToFooterBlocks,
  "/footers-to-widgets": footersToWidgets,
  "/widgets-to-navbar-blocks": widgetsToNavbarBlocks,
  "/navbars-to-widgets": navbarsToWidgets,
};
