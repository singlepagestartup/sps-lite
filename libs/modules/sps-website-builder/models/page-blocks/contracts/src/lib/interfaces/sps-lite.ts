import { Dispatch, SetStateAction } from "react";
import type { IModel as IAlertBlock } from "@sps/sps-website-builder-alert-block-contracts";
import type { IModel as ICtaSectionBlock } from "@sps/sps-website-builder-cta-section-block-contracts";
import type { IModel as IFaqBlock } from "@sps/sps-website-builder-faq-block-contracts";
import type { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder-features-section-block-contracts";
import type { IModel as IFooterBlock } from "@sps/sps-website-builder-footer-block-contracts";
import type { IModel as IHeaderSectionBlock } from "@sps/sps-website-builder-header-section-block-contracts";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-hero-section-block-contracts";
import type { IModel as IIncentivesBlock } from "@sps/sps-website-builder-incentives-block-contracts";
import type { IModel as ILogotypesCloudBlock } from "@sps/sps-website-builder-logotypes-cloud-block-contracts";
import type { IModel as INavbarBlock } from "@sps/sps-website-builder-navbar-block-contracts";
import type { IModel as INotFoundBlock } from "@sps/sps-website-builder-not-found-block-contracts";
import type { IModel as ISliderBlock } from "@sps/sps-website-builder-slider-block-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-button-contracts";
import type { IModel as IButtonsArray } from "@sps/sps-website-builder-buttons-array-contracts";
import type { IModel as ICheckoutFormBlock } from "@sps/sps-website-builder-checkout-form-block-contracts";
import type { IModel as IProductsListBlock } from "@sps/sps-website-builder-products-list-block-contracts";
import type { IModel as IShoppingCartBlock } from "@sps/sps-website-builder-shopping-cart-block-contracts";
import type { IModel as IContactSectonBlock } from "@sps/sps-website-builder-contact-section-block-contracts";
import type { IModel as IReviewsListBlock } from "@sps/sps-website-builder-reviews-list-block-contracts";
import type { IModel as IReviewsTableBlock } from "@sps/sps-website-builder-reviews-table-block-contracts";
import type { IModel as IEditSubscriptionBlock } from "@sps/sps-website-builder-edit-subscription-block-contracts";
import type { IModel as ITiersListBlock } from "@sps/sps-website-builder-tiers-list-block-contracts";

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
