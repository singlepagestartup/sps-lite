import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/page/interfaces";
import type { IModel as ILayout } from "@sps/sps-website-builder-contracts/lib/models/layout/interfaces";
import type { IModel as IMetatag } from "@sps/sps-website-builder-contracts/lib/models/metatag/interfaces";
import type { IModel as IAlertBlock } from "@sps/sps-website-builder-contracts/lib/models/alert-block/interfaces";
import type { IModel as ICtaSectionBlock } from "@sps/sps-website-builder-contracts/lib/models/cta-section-block/interfaces";
import type { IModel as IFaqBlock } from "@sps/sps-website-builder-contracts/lib/models/faq-block/interfaces";
import type { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder-contracts/lib/models/features-section-block/interfaces";
import type { IModel as IHeaderSectionBlock } from "@sps/sps-website-builder-contracts/lib/models/header-section-block/interfaces";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/interfaces";
import type { IModel as IIncentivesBlock } from "@sps/sps-website-builder-contracts/lib/models/incentives-block/interfaces";
import type { IModel as ILogotypesCloudBlock } from "@sps/sps-website-builder-contracts/lib/models/logotypes-cloud-block/interfaces";
import type { IModel as INotFoundBlock } from "@sps/sps-website-builder-contracts/lib/models/not-found-block/interfaces";
import type { IModel as ISliderBlock } from "@sps/sps-website-builder-contracts/lib/models/slider-block/interfaces";

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
