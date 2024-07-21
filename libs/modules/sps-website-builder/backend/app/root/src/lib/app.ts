import "reflect-metadata";
import { Context, Env, Hono, Next } from "hono";
import {
  DI,
  type IDefaultApp,
  type IExceptionFilter,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { app as heroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/backend/app/root";
import { app as buttonsArrat } from "@sps/sps-website-builder/models/buttons-array/backend/app/root";
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
@injectable()
export class App implements IDefaultApp<Env> {
  hono: Hono<Env>;
  exceptionFilter: IExceptionFilter;

  constructor(@inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter) {
    this.hono = new Hono<Env>();
    this.exceptionFilter = exceptionFilter;
  }

  public async init() {
    this.hono.use(async (c: Context, next: Next) => {
      const path = c.req.path;
      console.log("RBAC Middleware", path);
      await next();
    });
    this.useRoutes();
    this.hono.onError(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  useRoutes() {
    this.hono.mount("/hero-section-blocks", heroSectionBlock.hono.fetch);
    this.hono.mount("/buttons-arrays", buttonsArrat.hono.fetch);
    this.hono.mount("/buttons", button.hono.fetch);
    this.hono.mount("/features", feature.hono.fetch);
    this.hono.mount(
      "/features-section-blocks",
      featuresSectionBlock.hono.fetch,
    );
    this.hono.mount("/footers", footer.hono.fetch);

    this.hono.mount("/logotypes", logotype.hono.fetch);
    this.hono.mount("/slides", slide.hono.fetch);
    this.hono.mount("/sliders", slider.hono.fetch);
    this.hono.mount("/slider-blocks", sliderBlock.hono.fetch);
    this.hono.mount("/footer-blocks", footerBlock.hono.fetch);
    this.hono.mount("/navbar-blocks", navbarBlock.hono.fetch);
    this.hono.mount("/navbars", navbar.hono.fetch);
    this.hono.mount("/widgets", widget.hono.fetch);
    this.hono.mount(
      "/widgets-to-hero-section-blocks",
      widgetsToHeroSectionBlocks.hono.fetch,
    );

    this.hono.mount(
      "/buttons-arrays-to-buttons",
      buttonsArraysToButtons.hono.fetch,
    );
    this.hono.mount(
      "/features-section-blocks-to-features",
      featuresSectionBlocksToFeatures.hono.fetch,
    );
    this.hono.mount(
      "/features-to-sps-file-storage-module-files",
      featuresToSpsFileStorageModuleFiles.hono.fetch,
    );
    this.hono.mount(
      "/footer-blocks-to-buttons-arrays",
      footerBlocksToButtonsArrays.hono.fetch,
    );
    this.hono.mount(
      "/footer-blocks-to-logotypes",
      footerBlocksToLogotypes.hono.fetch,
    );
    this.hono.mount("/footers-to-widgets", footersFoWidgets.hono.fetch);
    this.hono.mount(
      "/hero-section-blocks-to-buttons-arrays",
      heroSectionBlocksToButtonsArrays.hono.fetch,
    );
    this.hono.mount(
      "/hero-section-blocks-to-sps-file-storage-module-widgets",
      heroSectionBlocksToSpsFileStorageModuleWidgets.hono.fetch,
    );
    this.hono.mount(
      "/logotypes-to-sps-file-storage-module-widgets",
      logotypesToSpsFileStorageModuleWidgets.hono.fetch,
    );
    this.hono.mount(
      "/navbar-blocks-to-buttons-arrays",
      navbarBlocksToButtonsArrays.hono.fetch,
    );
    this.hono.mount(
      "/navbar-blocks-to-logotypes",
      navbarBlocksToLogotypes.hono.fetch,
    );
    this.hono.mount("/navbars-to-widgets", navbarsToWidgets.hono.fetch);
    this.hono.mount(
      "/slider-blocks-to-sliders",
      sliderBlocksToSliders.hono.fetch,
    );
    this.hono.mount("/sliders-to-slides", slidersToSlides.hono.fetch);
    this.hono.mount(
      "/slides-to-buttons-arrays",
      slidesToButtonsArrays.hono.fetch,
    );
    this.hono.mount(
      "/slides-to-sps-file-storage-module-widgets",
      slidesToSpsFileStorageModuleWidgets.hono.fetch,
    );
    this.hono.mount(
      "/widgets-to-features-section-blocks",
      widgetsToFeaturesSectionBlocks.hono.fetch,
    );
    this.hono.mount(
      "/widgets-to-footer-blocks",
      widgetsToFooterBlocks.hono.fetch,
    );
    this.hono.mount(
      "/widgets-to-navbar-blocks",
      widgetsToNavbarBlocks.hono.fetch,
    );
    this.hono.mount(
      "/widgets-to-slider-blocks",
      widgetsToSliderBlocks.hono.fetch,
    );
  }
}
