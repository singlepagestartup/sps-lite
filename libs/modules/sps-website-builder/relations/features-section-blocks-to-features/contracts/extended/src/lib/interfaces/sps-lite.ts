import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-features-section-blocks-to-features-contracts";
import { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-contracts";
import { IModel as IFeature } from "@sps/sps-website-builder-models-feature-contracts";

export interface IRelation extends IParentRelation {
  featuresSectionBlock: IFeaturesSectionBlock;
  feature: IFeature;
}
