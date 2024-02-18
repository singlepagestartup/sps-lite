import type { IModel as IParentModel } from "@sps/sps-website-builder-page-contracts";
import type { IModel as ILayout } from "@sps/sps-website-builder-layout-contracts";
import type { IModel as IMetatag } from "@sps/sps-website-builder-metatag-contracts";
import type { IModel as IAlertBlock } from "@sps/sps-website-builder-alert-block-contracts";
import type { IModel as ICtaSectionBlock } from "@sps/sps-website-builder-cta-section-block-contracts";
import { IModel as IFaqBlock } from "@sps/sps-website-builder-faq-block-contracts";
import { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder-features-section-block-contracts";
import { IModel as IHeaderSectionBlock } from "@sps/sps-website-builder-header-section-block-contracts";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-hero-section-block-contracts";
import type { IModel as IIncentivesBlock } from "@sps/sps-website-builder-incentives-block-contracts";
import type { IModel as ILogotypesCloudBlock } from "@sps/sps-website-builder-logotypes-cloud-block-contracts";
import type { IModel as INotFoundBlock } from "@sps/sps-website-builder-not-found-block-contracts";
import type { IModel as ISliderBlock } from "@sps/sps-website-builder-slider-block-contracts";

type IPageBlock =
  | IAlertBlock
  | ICtaSectionBlock
  | IFaqBlock
  | IFeaturesSectionBlock
  | IHeaderSectionBlock
  | IHeroSectionBlock
  | IIncentivesBlock
  | ILogotypesCloudBlock
  | INotFoundBlock
  | ISliderBlock;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
  layout?: ILayout | null;
  metatag?: IMetatag | null;
}
