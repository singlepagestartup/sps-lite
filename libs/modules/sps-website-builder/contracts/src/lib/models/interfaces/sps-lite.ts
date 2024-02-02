import { IModel as IAlertBlock } from "../alert-block/interfaces";
import { IModel as ICtaSectionBlockBlock } from "../cta-section-block/interfaces";
import { IModel as IFaqBlock } from "../faq-block/interfaces";
import { IModel as IFeaturesSectionBlock } from "../features-section-block/interfaces";
import { IModel as IFooterBlock } from "../footer-block/interfaces";
import { IModel as IHeaderSecionBlock } from "../header-section-block/interfaces";
import { IModel as IHeroSectionBlock } from "../hero-section-block/interfaces";
import { IModel as IIncentivesBlock } from "../incentives-block/interfaces";
import { IModel as ILogotypesCloudBlock } from "../logotypes-cloud-block/interfaces";
import { IModel as INavbarBlock } from "../navbar-block/interfaces";
import { IModel as INotFoundBlock } from "../not-found-block/interfaces";
import { IModel as ISliderBlock } from "../slider-block/interfaces";

export type IModel =
  | IAlertBlock
  | ICtaSectionBlockBlock
  | IFaqBlock
  | IFeaturesSectionBlock
  | IFooterBlock
  | IHeaderSecionBlock
  | IHeroSectionBlock
  | IIncentivesBlock
  | ILogotypesCloudBlock
  | INavbarBlock
  | INotFoundBlock
  | ISliderBlock;
