import { app as contentBlock } from "@sps/sps-website-builder/models/content-block/backend/app/api";
import { app as buttonsArray } from "@sps/sps-website-builder/models/buttons-array/backend/app/api";
import { app as button } from "@sps/sps-website-builder/models/button/backend/app/api";
import { app as feature } from "@sps/sps-website-builder/models/feature/backend/app/api";
import { app as logotype } from "@sps/sps-website-builder/models/logotype/backend/app/api";
import { app as slide } from "@sps/sps-website-builder/models/slide/backend/app/api";
import { app as slider } from "@sps/sps-website-builder/models/slider/backend/app/api";
import { app as footerBlock } from "@sps/sps-website-builder/models/footer-block/backend/app/api";
import { app as navbarBlock } from "@sps/sps-website-builder/models/navbar-block/backend/app/api";
import { app as widget } from "@sps/sps-website-builder/models/widget/backend/app/api";
import { app as widgetsToContentBlocks } from "@sps/sps-website-builder/relations/widgets-to-content-blocks/backend/app/api";
import { app as buttonsArraysToButtons } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/backend/app/api";
import { app as contentBlocksToFeatures } from "@sps/sps-website-builder/relations/content-blocks-to-features/backend/app/api";
import { app as featuresToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-widgets/backend/app/api";
import { app as footerBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/backend/app/api";
import { app as footerBlocksToLogotypes } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/backend/app/api";
import { app as contentBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/content-blocks-to-buttons-arrays/backend/app/api";
import { app as contentBlocksToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/content-blocks-to-sps-file-storage-module-widgets/backend/app/api";
import { app as logotypesToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/backend/app/api";
import { app as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/backend/app/api";
import { app as navbarBlocksToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/backend/app/api";
import { app as sliderBlocksToSliders } from "@sps/sps-website-builder/relations/content-blocks-to-sliders/backend/app/api";
import { app as slidersToSlides } from "@sps/sps-website-builder/relations/sliders-to-slides/backend/app/api";
import { app as slidesToButtonsArrays } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/backend/app/api";
import { app as slidesToSpsFileStorageModuleWidgets } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/backend/app/api";
import { app as widgetsToFooterBlocks } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/backend/app/api";
import { app as widgetsToNavbarBlocks } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/backend/app/api";
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
      route: "/content-blocks",
      app: contentBlock,
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
      route: "/navbar-blocks",
      app: navbarBlock,
    });
    this.apps.push({
      type: "model",
      route: "/widgets",
      app: widget,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-content-blocks",
      app: widgetsToContentBlocks,
    });
    this.apps.push({
      type: "relation",
      route: "/buttons-arrays-to-buttons",
      app: buttonsArraysToButtons,
    });
    this.apps.push({
      type: "relation",
      route: "/content-blocks-to-features",
      app: contentBlocksToFeatures,
    });
    this.apps.push({
      type: "relation",
      route: "/features-to-sps-file-storage-module-widgets",
      app: featuresToSpsFileStorageModuleFiles,
    });
    this.apps.push({
      type: "relation",
      route: "/footer-blocks-to-buttons-arrays",
      app: footerBlocksToButtonsArrays,
    });
    this.apps.push({
      type: "relation",
      route: "/content-blocks-to-buttons-arrays",
      app: contentBlocksToButtonsArrays,
    });
    this.apps.push({
      type: "relation",
      route: "/content-blocks-to-sps-file-storage-module-widgets",
      app: contentBlocksToSpsFileStorageModuleWidgets,
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
      route: "/content-blocks-to-sliders",
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
      route: "/widgets-to-footer-blocks",
      app: widgetsToFooterBlocks,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-navbar-blocks",
      app: widgetsToNavbarBlocks,
    });
  }
}
