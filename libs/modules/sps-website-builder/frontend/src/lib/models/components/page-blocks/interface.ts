import type { IModel as IAlertBlock } from "@sps/sps-website-builder-contracts/lib/models/alert-block/interfaces";
import type { IModel as IButton } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";
import type { IModel as IButtonsArray } from "@sps/sps-website-builder-contracts/lib/models/buttons-array/interfaces";
import type { IModel as ICtaSectionBlock } from "@sps/sps-website-builder-contracts/lib/models/cta-section-block/interfaces";
import type { IModel as IFaqBlock } from "@sps/sps-website-builder-contracts/lib/models/faq-block/interfaces";
import type { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder-contracts/lib/models/features-section-block/interfaces";
import type { IModel as IFooterBlock } from "@sps/sps-website-builder-contracts/lib/models/footer-block/interfaces";
import type { IModel as IHeaderSectionBlock } from "@sps/sps-website-builder-contracts/lib/models/header-section-block/interfaces";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/interfaces";
import type { IModel as IIncentivesBlock } from "@sps/sps-website-builder-contracts/lib/models/incentives-block/interfaces";
import type { IModel as ILogotypesCloudBlock } from "@sps/sps-website-builder-contracts/lib/models/logotypes-cloud-block/interfaces";
import type { IModel as INavbarBlock } from "@sps/sps-website-builder-contracts/lib/models/navbar-block/interfaces";
import type { IModel as INotFoundBlock } from "@sps/sps-website-builder-contracts/lib/models/not-found-block/interfaces";
import type { IModel as ISliderBlock } from "@sps/sps-website-builder-contracts/lib/models/slider-block/interfaces";

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
  | IButton
  | IButtonsArray;

export interface IComponentProps {
  isServer: boolean;
  pageBlocks?: IPageBlock[] | null;
}
