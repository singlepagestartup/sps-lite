import type { IModel as IParentModel } from "@sps/sps-website-builder-models-page-contracts";
import type { IModel as ILayout } from "@sps/sps-website-builder-models-layout-contracts";
import type { IModel as IMetatag } from "@sps/sps-website-builder-models-metatag-contracts";
import type { IModel as IAlertBlock } from "@sps/sps-website-builder-models-alert-block-contracts";
import type { IModel as ICtaSectionBlock } from "@sps/sps-website-builder-models-cta-section-block-contracts";
import { IModel as IFaqBlock } from "@sps/sps-website-builder-models-faq-block-contracts";
import { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-contracts";
import { IModel as IHeaderSectionBlock } from "@sps/sps-website-builder-models-header-section-block-contracts";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import type { IModel as IIncentivesBlock } from "@sps/sps-website-builder-models-incentives-block-contracts";
import type { IModel as ILogotypesCloudBlock } from "@sps/sps-website-builder-models-logotypes-cloud-block-contracts";
import type { IModel as INotFoundBlock } from "@sps/sps-website-builder-models-not-found-block-contracts";
import type { IModel as ISliderBlock } from "@sps/sps-website-builder-models-slider-block-contracts";

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
