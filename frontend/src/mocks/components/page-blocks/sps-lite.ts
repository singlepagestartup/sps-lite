import {
  ISpsLiteBackendContactSectonBlock,
  ISpsLiteBackendCtaSectionBlock,
  ISpsLiteBackendFaqBlock,
  ISpsLiteBackendFeaturesSectionBlock,
  ISpsLiteBackendFooterBlock,
  ISpsLiteBackendHeaderSectionBlock,
  ISpsLiteBackendHeroSectionBlock,
  ISpsLiteBackendIncentivesBlock,
  ISpsLiteBackendLogotypesCloudBlock,
  ISpsLiteBackendNavbarBlock,
  ISpsLiteBackendNotFoundBlock,
  ISpsLiteBackendPricingsBlock,
  ISpsLiteBackendReviewsListBlock,
  ISpsLiteBackendReviewsTableBlock,
  ISpsLiteBackendSliderBlock,
} from "types/components/page-blocks/sps-lite";
import {
  spsLiteBackendSliderFadeWithPreviews,
  spsLiteBackendTier,
} from "~mocks/collection-types/sps-lite";
import {
  spsLiteBackendButtonSecondary,
  spsLiteBackendButtonText,
  spsLiteBackendButtonsArrayColumnWithTitleButtonsSecondary,
  spsLiteBackendButtonsArrayColumnWithTitleButtonsText,
  spsLiteBackendButtonsArrayRowButtonsText,
  spsLiteBackendButtonsArrayRowButtonsTextMedia,
  spsLiteBackendFaq,
  spsLiteBackendFeature,
  spsLiteBackendLogotype,
} from "~mocks/components/elements/sps-lite";
import { spsLiteUploadPluginBackendMediaTableAndHands } from "~mocks/plugins/upload/sps-lite";

export const spsLiteBackendFeatureSectionBlockWithIcon: ISpsLiteBackendFeaturesSectionBlock =
  {
    id: 32,
    title: "Title Of Feature Section Block With Icon",
    variant: "with-icon",
    className: null,
    subtitle: "Subtitle Of Feature Section Block With Icon",
    anchor: "anchor",
    description:
      "Reduce the time and effort required to build and launch an initial product, helping you validate your ideas and gather customer feedback more quickly. This will allow you to iterate and improve upon your product, increasing your chances of success in the competitive startup landscape.",
    __component: "page-blocks.features-section-block",
    features: Array(4).fill({ ...spsLiteBackendFeature }),
    media: [{ ...spsLiteUploadPluginBackendMediaTableAndHands }],
  };

export const spsLiteBackendContactSectionBlockCentered: ISpsLiteBackendContactSectonBlock =
  {
    id: 5,
    title: "We are ready to help",
    variant: "centered",
    className: null,
    subtitle: null,
    __component: "page-blocks.contact-section-block",
    anchor: "anchor",
    description:
      "Fill in all the fields below and our manager will contact you.",
    buttonsArrays: [
      { ...spsLiteBackendButtonsArrayColumnWithTitleButtonsSecondary },
    ],
  };

export const spsLiteBackendCtaSectionBlockDarkPanelWithAppScreenshot: ISpsLiteBackendCtaSectionBlock =
  {
    id: 3,
    title: "Minimum Viable Product is Ready",
    variant: "dark-with-image",
    className: "cta_class_name",
    subtitle: "Subtitle",
    anchor: "pb-cta-section",
    __component: "page-blocks.cta-section-block",
    description:
      "Reduce the time and effort required to build and launch an initial product, helping you validate your ideas and gather customer feedback more quickly. This will allow you to iterate and improve upon your product, increasing your chances of success in the competitive startup landscape.",
    buttons: Array(3).fill({ ...spsLiteBackendButtonSecondary }),
    media: [{ ...spsLiteUploadPluginBackendMediaTableAndHands }],
  };

export const spsLiteBackendFaqBlockTwoColumnsWithCenteredIntroduction: ISpsLiteBackendFaqBlock =
  {
    id: 2,
    title: "Fruequently Asked Questions",
    anchor: "faq-anchor",
    className: "faq_class_name",
    subtitle: "Subtitle",
    variant: "two-columns-with-centered-introduction",
    __component: "page-blocks.faqs-block",
    description:
      "SignlePageStartup is designed to help you efficiently create a MVP that you can launch quickly to gather customer feedback and validate your ideas. Here's what you can expect from the MVP-ready feature.",
    faqs: Array(4).fill({ ...spsLiteBackendFaq }),
  };

export const spsLiteBackendHeaderSectionBlockSimpleCentered: ISpsLiteBackendHeaderSectionBlock =
  {
    id: 9,
    variant: "simple-centered",
    __component: "page-blocks.header-section-block",
    title: "Minimum Viable Product is Ready",
    className: "header_section_class_name",
    subtitle: "Subtitle",
    anchor: "header-section-anchor",
    description:
      "Reduce the time and effort required to build and launch an initial product, helping you validate your ideas and gather customer feedback more quickly. This will allow you to iterate and improve upon your product, increasing your chances of success in the competitive startup landscape.",
  };

export const spsLiteBackendHeroSectionBlockSimpleCentered: ISpsLiteBackendHeroSectionBlock =
  {
    id: 4,
    variant: "simple-centered",
    className: "hero_section_class_name",
    anchor: "hero-section-anchor",
    title: "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate",
    description:
      "Spend less time on setup and more time building your innovative product with our ready-to-use, feature-packed boilerplate designed for lean startup developers.",
    buttons: [{ ...spsLiteBackendButtonSecondary }],
    __component: "page-blocks.hero-section-block",
    media: [{ ...spsLiteUploadPluginBackendMediaTableAndHands }],
  };

export const spsLiteBackendIncentivesBlockFourColumnWithIllustrations: ISpsLiteBackendIncentivesBlock =
  {
    id: 9,
    title: "Title",
    description: "Description",
    subtitle: null,
    className: null,
    anchor: "anchor",
    __component: "page-blocks.incentives-block",
    variant: "four-column-with-illustrations",
    features: Array(4).fill({ ...spsLiteBackendFeature }),
  };

export const spsLiteBackendLogotypesCloudBlockSimpleWithHeading: ISpsLiteBackendLogotypesCloudBlock =
  {
    id: 5,
    __component: "page-blocks.logotypes-cloud-block",
    variant: "simple-with-heading",
    title: "Hello world",
    subtitle: "Subtitle",
    description: "Description",
    className: null,
    anchor: "anchor",
    logotypes: Array(5).fill({ ...spsLiteBackendLogotype }),
  };

export const spsLiteBackendNotFoundBlockSimple: ISpsLiteBackendNotFoundBlock = {
  id: 3,
  __component: "page-blocks.not-found-block",
  variant: "simple",
  title: "404",
  subtitle: "Page not found",
  className: null,
  description: "Come to main page and start again",
  buttons: Array(1).fill({ ...spsLiteBackendButtonSecondary }),
};

export const spsLiteBackendPricingBlockTwoColumns: ISpsLiteBackendPricingsBlock =
  {
    id: 2,
    __component: "page-blocks.pricing-block",
    variant: "two-columns",
    title: "Minimum Viable Product is Ready",
    subtitle: "Subtitle",
    anchor: "anchor",
    description:
      "Reduce the time and effort required to build and launch an initial product, helping you validate your ideas and gather customer feedback more quickly. This will allow you to iterate and improve upon your product, increasing your chances of success in the competitive startup landscape.",
    className: null,
    tiers: Array(2).fill({ ...spsLiteBackendTier }),
  };

export const spsLiteBackendReviewsListBlockSimpleWithAvatars: ISpsLiteBackendReviewsListBlock =
  {
    id: 5,
    __component: "page-blocks.reviews-list-block",
    variant: "simple-with-avatars",
    subtitle: null,
    description: null,
    className: null,
    title: null,
    showAll: null,
    anchor: "anchor",
  };

export const spsLiteBackendReviewsTableBlockSimple: ISpsLiteBackendReviewsTableBlock =
  {
    id: 9,
    __component: "page-blocks.reviews-table-block",
    variant: "simple",
    className: null,
    anchor: null,
  };

export const spsLiteBackendSliderBlockSimple: ISpsLiteBackendSliderBlock = {
  id: 2,
  __component: "page-blocks.slider-block",
  variant: "simple",
  className: null,
  title: null,
  subtitle: null,
  description: null,
  slider: { ...spsLiteBackendSliderFadeWithPreviews },
  anchor: null,
};

export const spsLiteBackendNavbarBlockSimple: ISpsLiteBackendNavbarBlock = {
  id: 2,
  __component: "page-blocks.navbar-block",
  variant: "simple-links-on-left",
  description: "Description",
  className: "class-name",
  logotype: { ...spsLiteBackendLogotype },
  buttons: [{ ...spsLiteBackendButtonText }, { ...spsLiteBackendButtonText }],
  additionalButtons: [{ ...spsLiteBackendButtonSecondary }],
  extraButtons: [{ ...spsLiteBackendButtonSecondary }],
};

export const spsLiteBackendFooterBlockSimple: ISpsLiteBackendFooterBlock = {
  id: 2,
  __component: "page-blocks.footer-block",
  variant: "four-columns-with-company-mission",
  className: "class-name",
  logotype: { ...spsLiteBackendLogotype },
  copyrights: "All rights are reserved | Single Page Startup",
  description:
    "Create your startup in a few hours and gradually step-by-step expand the functionality. Finalize it to a complete product without wasting time on developing product from scratch.",
  buttonsArrays: [
    { ...spsLiteBackendButtonsArrayColumnWithTitleButtonsText },
    { ...spsLiteBackendButtonsArrayColumnWithTitleButtonsText },
  ],
  additionalButtonsArrays: [{ ...spsLiteBackendButtonsArrayRowButtonsText }],
  extraButtonsArrays: [
    { ...spsLiteBackendButtonsArrayRowButtonsTextMedia },
    { ...spsLiteBackendButtonsArrayRowButtonsTextMedia },
  ],
};
