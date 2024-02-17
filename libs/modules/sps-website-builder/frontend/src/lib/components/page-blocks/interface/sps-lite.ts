import { Dispatch, SetStateAction } from "react";
import type { IModel as IAlertBlock } from "@sps/sps-website-builder-alert-block-contracts";
import type { IModel as ICtaSectionBlock } from "../../../models/cta-section-block/model";
import type { IModel as IFaqBlock } from "../../../models/faq-block/model";
import type { IModel as IFeaturesSectionBlock } from "../../../models/features-section-block/model";
import type { IModel as IFooterBlock } from "../../../models/footer-block/model";
import type { IModel as IHeaderSectionBlock } from "../../../models/header-section-block/model";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-hero-section-block-contracts";
import type { IModel as IIncentivesBlock } from "../../../models/incentives-block/model";
import type { IModel as ILogotypesCloudBlock } from "../../../models/logotypes-cloud-block/model";
import type { IModel as INavbarBlock } from "../../../models/navbar-block/model";
import type { IModel as INotFoundBlock } from "../../../models/not-found-block/model";
import type { IModel as ISliderBlock } from "../../../models/slider-block/model";
import type { IModel as IButton } from "@sps/sps-website-builder-button-contracts";
import type { IModel as IButtonsArray } from "@sps/sps-website-builder-buttons-array-contracts";
import type { IModel as ICheckoutFormBlock } from "@sps/sps-website-builder-checkout-form-block-contracts";
import type { IModel as IProductsListBlock } from "../../../models/products-list-block/model";
import type { IModel as IShoppingCartBlock } from "../../../models/shopping-cart-block/model";
import type { IModel as IContactSectonBlock } from "@sps/sps-website-builder-contact-section-block-contracts";
import type { IModel as IReviewsListBlock } from "../../../models/reviews-list-block/model";
import type { IModel as IReviewsTableBlock } from "../../../models/reviews-table-block/model";
import type { IModel as IEditSubscriptionBlock } from "../../../models/edit-subscription-block/model";
import type { IModel as ITiersListBlock } from "../../../models/tiers-list-block/model";

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

export interface IComponentProps {
  variant: "default";
  isServer: boolean;
  data: {
    pageBlocks?: IPageBlock[] | null;
  };
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
