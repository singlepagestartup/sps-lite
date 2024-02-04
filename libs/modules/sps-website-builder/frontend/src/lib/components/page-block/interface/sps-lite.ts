import type { IModel as IAlertBlock } from "../../../models/alert-block/_model";
import type { IModel as ICtaSectionBlock } from "../../../models/cta-section-block/_model";
import type { IModel as IFaqBlock } from "../../../models/faq-block/_model";
import type { IModel as IFeaturesSectionBlock } from "../../../models/features-section-block/_model";
import type { IModel as IFooterBlock } from "../../../models/footer-block/_model";
import type { IModel as IHeaderSectionBlock } from "../../../models/header-section-block/_model";
import type { IModel as IHeroSectionBlock } from "../../../models/hero-section-block/_model";
import type { IModel as IIncentivesBlock } from "../../../models/incentives-block/_model";
import type { IModel as ILogotypesCloudBlock } from "../../../models/logotypes-cloud-block/_model";
import type { IModel as INavbarBlock } from "../../../models/navbar-block/_model";
import type { IModel as INotFoundBlock } from "../../../models/not-found-block/_model";
import type { IModel as ISliderBlock } from "../../../models/slider-block/_model";
import { Dispatch, SetStateAction } from "react";
import { IComponentProps as ISpsEcommercePageBlock } from "@sps/sps-ecommerce-frontend/lib/components/page-block/interface";

type IPageBlock =
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
  | ISpsEcommercePageBlock;

export type IComponentProps = IPageBlock;

export type IComponentPropsExtended = IComponentProps & {
  isServer: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
};
