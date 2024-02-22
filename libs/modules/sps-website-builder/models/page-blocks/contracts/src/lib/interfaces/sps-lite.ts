import { Dispatch, SetStateAction } from "react";
import type { IModel as IAlertBlock } from "@sps/sps-website-builder-models-alert-block-contracts";
import type { IModel as ICtaSectionBlock } from "@sps/sps-website-builder-models-cta-section-block-contracts";
import type { IModel as IFaqBlock } from "@sps/sps-website-builder-models-faq-block-contracts";
import type { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-contracts";
import type { IModel as IFooterBlock } from "@sps/sps-website-builder-models-footer-block-contracts";
import type { IModel as IHeaderSectionBlock } from "@sps/sps-website-builder-models-header-section-block-contracts";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import type { IModel as IIncentivesBlock } from "@sps/sps-website-builder-models-incentives-block-contracts";
import type { IModel as ILogotypesCloudBlock } from "@sps/sps-website-builder-models-logotypes-cloud-block-contracts";
import type { IModel as INavbarBlock } from "@sps/sps-website-builder-models-navbar-block-contracts";
import type { IModel as INotFoundBlock } from "@sps/sps-website-builder-models-not-found-block-contracts";
import type { IModel as ISliderBlock } from "@sps/sps-website-builder-models-slider-block-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";
import type { IModel as IButtonsArray } from "@sps/sps-website-builder-models-buttons-array-contracts";
import type { IModel as ICheckoutFormBlock } from "@sps/sps-website-builder-models-checkout-form-block-contracts";
import type { IModel as IProductsListBlock } from "@sps/sps-website-builder-models-products-list-block-contracts";
import type { IModel as IShoppingCartBlock } from "@sps/sps-website-builder-models-shopping-cart-block-contracts";
import type { IModel as IContactSectonBlock } from "@sps/sps-website-builder-models-contact-section-block-contracts";
import type { IModel as IReviewsListBlock } from "@sps/sps-website-builder-models-reviews-list-block-contracts";
import type { IModel as IReviewsTableBlock } from "@sps/sps-website-builder-models-reviews-table-block-contracts";
import type { IModel as IEditSubscriptionBlock } from "@sps/sps-website-builder-models-edit-subscription-block-contracts";
import type { IModel as ITiersListBlock } from "@sps/sps-website-builder-models-tiers-list-block-contracts";

export type IPageBlock =
  | IAlertBlock
  | ICtaSectionBlock
  | IFaqBlock
  | IFeaturesSectionBlock
  | IFooterBlock
  | IHeaderSectionBlock
  | IHeroSectionBlock
  | IIncentivesBlock
  | ILogotypesCloudBlock
  | INavbarBlock
  | INotFoundBlock
  | ISliderBlock
  | IButton
  | IButtonsArray
  | ICheckoutFormBlock
  | IProductsListBlock
  | IShoppingCartBlock
  | IContactSectonBlock
  | IReviewsListBlock
  | IReviewsTableBlock
  | IEditSubscriptionBlock
  | ITiersListBlock;

export interface IModel {
  variant: "default";
  isServer: boolean;
  data: {
    pageBlocks?: IPageBlock[] | null;
  };
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
