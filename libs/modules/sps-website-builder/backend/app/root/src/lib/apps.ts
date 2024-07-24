import { app as heroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/backend/app/root";
import { app as buttonsArray } from "@sps/sps-website-builder/models/buttons-array/backend/app/root";
import { app as button } from "@sps/sps-website-builder/models/button/backend/app/root";
import { app as feature } from "@sps/sps-website-builder/models/feature/backend/app/root";
import { app as featuresSectionBlock } from "@sps/sps-website-builder/models/features-section-block/backend/app/root";
import { app as footer } from "@sps/sps-website-builder/models/footer/backend/app/root";
import { app as logotype } from "@sps/sps-website-builder/models/logotype/backend/app/root";
import { app as slide } from "@sps/sps-website-builder/models/slide/backend/app/root";
import { app as slider } from "@sps/sps-website-builder/models/slider/backend/app/root";
import { app as sliderBlock } from "@sps/sps-website-builder/models/slider-block/backend/app/root";
import { app as footerBlock } from "@sps/sps-website-builder/models/footer-block/backend/app/root";
import { app as navbarBlock } from "@sps/sps-website-builder/models/navbar-block/backend/app/root";
import { app as navbar } from "@sps/sps-website-builder/models/navbar/backend/app/root";
import { app as widget } from "@sps/sps-website-builder/models/widget/backend/app/root";
import { app as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/backend/app/root";
import { app as buttonsArraysToButtons } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/backend/app/root";
import { app as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/backend/app/root";
import { app as featuresToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/backend/app/root";
import { app as footerBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/backend/app/root";
import { app as footerBlocksToLogotypes } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/backend/app/root";
import { app as footersFoWidgets } from "@sps/sps-website-builder/relations/footers-to-widgets/backend/app/root";
import { app as heroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/backend/app/root";
import { app as heroSectionBlocksToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/backend/app/root";
import { app as logotypesToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/backend/app/root";
import { app as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/backend/app/root";
import { app as navbarBlocksToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/backend/app/root";
import { app as navbarsToWidgets } from "@sps/sps-website-builder/relations/navbars-to-widgets/backend/app/root";
import { app as sliderBlocksToSliders } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/backend/app/root";
import { app as slidersToSlides } from "@sps/sps-website-builder/relations/sliders-to-slides/backend/app/root";
import { app as slidesToButtonsArrays } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/backend/app/root";
import { app as slidesToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/backend/app/root";
import { app as widgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-features-section-blocks/backend/app/root";
import { app as widgetsToFooterBlocks } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/backend/app/root";
import { app as widgetsToNavbarBlocks } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/backend/app/root";
import { app as widgetsToSliderBlocks } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/backend/app/root";
import { DefaultApp } from "@sps/shared-backend-api";

export class Apps {
  apps: { type: "model" | "relation"; route: string; app: DefaultApp<any> }[] =
    [];

  constructor() {
    this.bindApps();
  }

  bindApps() {
    this.apps.push({
      type: "model",
      route: "/logotypes",
      app: logotype,
    });
    this.apps.push({
      type: "model",
      route: "/hero-section-blocks",
      app: heroSectionBlock,
    });
    this.apps.push({
      type: "model",
      route: "/footer-blocks",
      app: footerBlock,
    });
    this.apps.push({
      type: "relation",
      route: "/footer-blocks-to-logotypes",
      app: footerBlocksToLogotypes,
    });
    this.apps.push({
      type: "model",
      route: "/buttons-arrays",
      app: buttonsArray,
    });
    this.apps.push({
      type: "model",
      route: "/buttons",
      app: button,
    });
    this.apps.push({
      type: "model",
      route: "/features",
      app: feature,
    });
    this.apps.push({
      type: "model",
      route: "/features-section-blocks",
      app: featuresSectionBlock,
    });
    this.apps.push({
      type: "model",
      route: "/footers",
      app: footer,
    });
    this.apps.push({
      type: "model",
      route: "/slides",
      app: slide,
    });
    this.apps.push({
      type: "model",
      route: "/sliders",
      app: slider,
    });
    this.apps.push({
      type: "model",
      route: "/slider-blocks",
      app: sliderBlock,
    });
    this.apps.push({
      type: "model",
      route: "/navbar-blocks",
      app: navbarBlock,
    });
    this.apps.push({
      type: "model",
      route: "/navbars",
      app: navbar,
    });
    this.apps.push({
      type: "model",
      route: "/widgets",
      app: widget,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-hero-section-blocks",
      app: widgetsToHeroSectionBlocks,
    });
    this.apps.push({
      type: "relation",
      route: "/buttons-arrays-to-buttons",
      app: buttonsArraysToButtons,
    });
    this.apps.push({
      type: "relation",
      route: "/features-section-blocks-to-features",
      app: featuresSectionBlocksToFeatures,
    });
    this.apps.push({
      type: "relation",
      route: "/features-to-sps-file-storage-module-files",
      app: featuresToSpsFileStorageModuleFiles,
    });
    this.apps.push({
      type: "relation",
      route: "/footer-blocks-to-buttons-arrays",
      app: footerBlocksToButtonsArrays,
    });
    this.apps.push({
      type: "relation",
      route: "/footers-to-widgets",
      app: footersFoWidgets,
    });
    this.apps.push({
      type: "relation",
      route: "/hero-section-blocks-to-buttons-arrays",
      app: heroSectionBlocksToButtonsArrays,
    });
    this.apps.push({
      type: "relation",
      route: "/hero-section-blocks-to-sps-file-storage-module-widgets",
      app: heroSectionBlocksToSpsFileStorageModuleWidgets,
    });
    this.apps.push({
      type: "relation",
      route: "/logotypes-to-sps-file-storage-module-widgets",
      app: logotypesToSpsFileStorageModuleWidgets,
    });
    this.apps.push({
      type: "relation",
      route: "/navbar-blocks-to-buttons-arrays",
      app: navbarBlocksToButtonsArrays,
    });
    this.apps.push({
      type: "relation",
      route: "/navbar-blocks-to-logotypes",
      app: navbarBlocksToLogotypes,
    });
    this.apps.push({
      type: "relation",
      route: "/navbars-to-widgets",
      app: navbarsToWidgets,
    });
    this.apps.push({
      type: "relation",
      route: "/slider-blocks-to-sliders",
      app: sliderBlocksToSliders,
    });
    this.apps.push({
      type: "relation",
      route: "/sliders-to-slides",
      app: slidersToSlides,
    });
    this.apps.push({
      type: "relation",
      route: "/slides-to-buttons-arrays",
      app: slidesToButtonsArrays,
    });
    this.apps.push({
      type: "relation",
      route: "/slides-to-sps-file-storage-module-widgets",
      app: slidesToSpsFileStorageModuleWidgets,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-features-section-blocks",
      app: widgetsToFeaturesSectionBlocks,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-footer-blocks",
      app: widgetsToFooterBlocks,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-navbar-blocks",
      app: widgetsToNavbarBlocks,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-slider-blocks",
      app: widgetsToSliderBlocks,
    });
  }
}
