import { populate as widgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder/models/widget/backend/schema/relations/widgets-to-features-section-blocks";
import { populate as widgetsToSliderBlocks } from "@sps/sps-website-builder/models/widget/backend/schema/relations/widgets-to-slider-blocks";
import { populate as widgetsToFooterBlocks } from "@sps/sps-website-builder/models/widget/backend/schema/relations/widgets-to-footer-blocks";
import { populate as footersToWidgets } from "@sps/sps-website-builder/models/widget/backend/schema/relations/footers-to-widgets";
import { populate as widgetsToNavbarBlocks } from "@sps/sps-website-builder/models/widget/backend/schema/relations/widgets-to-navbar-blocks";
import { populate as navbarsToWidgets } from "@sps/sps-website-builder/models/widget/backend/schema/relations/navbars-to-widgets";
import { populate as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder/models/widget/backend/schema/relations/widgets-to-hero-section-blocks";

export const populate = (params: any) => {
  return {
    widgetsToFeaturesSectionBlocks: widgetsToFeaturesSectionBlocks(params),
    widgetsToSliderBlocks: widgetsToSliderBlocks(params),
    widgetsToFooterBlocks: widgetsToFooterBlocks(params),
    footersToWidgets: footersToWidgets(params),
    widgetsToNavbarBlocks: widgetsToNavbarBlocks(params),
    navbarsToWidgets: navbarsToWidgets(params),
    widgetsToHeroSectionBlocks: widgetsToHeroSectionBlocks(params),
  } as const;
};
