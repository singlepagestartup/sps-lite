import type { IModel as IAlertBlock } from "../../../models/alert-block/model";
import type { IModel as ICtaSectionBlock } from "../../../models/cta-section-block/model";
import type { IModel as IFaqBlock } from "../../../models/faq-block/model";
import type { IModel as IFeaturesSectionBlock } from "../../../models/features-section-block/model";
import type { IModel as IFooterBlock } from "../../../models/footer-block/model";
import type { IModel as IHeaderSectionBlock } from "../../../models/header-section-block/model";
import type { IModel as IHeroSectionBlock } from "../../../models/hero-section-block/model";
import type { IModel as IIncentivesBlock } from "../../../models/incentives-block/model";
import type { IModel as ILogotypesCloudBlock } from "../../../models/logotypes-cloud-block/model";
import type { IModel as INavbarBlock } from "../../../models/navbar-block/model";
import type { IModel as INotFoundBlock } from "../../../models/not-found-block/model";
import type { IModel as ISliderBlock } from "../../../models/slider-block/model";
import { Dispatch, SetStateAction } from "react";

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
  | ISliderBlock;

export type IComponentProps = IPageBlock;

export type IComponentPropsExtended = IComponentProps & {
  isServer: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
};
