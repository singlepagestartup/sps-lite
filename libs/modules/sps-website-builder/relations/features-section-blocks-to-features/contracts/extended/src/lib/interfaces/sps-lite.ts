import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/contracts/root";
import { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder/models/features-section-block/contracts/root";
import { IModel as IFeature } from "@sps/sps-website-builder/models/feature/sdk/model";

export interface IRelation extends IParentRelation {
  featuresSectionBlock: IFeaturesSectionBlock;
  feature: IFeature;
}
