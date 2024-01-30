import { IComponent as IAlertBlock } from "../alert-block/interfaces";
import { IComponent as ICtaSectionBlockBlock } from "../cta-section-block/interfaces";
import { IComponent as IFaqBlock } from "../faq-block/interfaces";
import { IComponent as IFeaturesSectionBlock } from "../features-section-block/interfaces";
import { IComponent as IFooterBlock } from "../footer-block/interfaces";
import { IComponent as IHeaderSecionBlock } from "../header-section-block/interfaces";
import { IComponent as IHeroSectionBlock } from "../hero-section-block/interfaces";
import { IComponent as IIncentivesBlock } from "../incentives-block/interfaces";
import { IComponent as ILogotypesCloudBlock } from "../logotypes-cloud-block/interfaces";
import { IComponent as INavbarBlock } from "../navbar-block/interfaces";
import { IComponent as INotFoundBlock } from "../not-found-block/interfaces";
import { IComponent as ISliderBlock } from "../slider-block/interfaces";

export type IComponent =
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
