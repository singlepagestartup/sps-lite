import type { IModel as IParentModel } from "@sps/sps-website-builder-models-features-section-block-contracts";
import { IRelation as IFeaturesSectionBlockToFeature } from "@sps/sps-website-builder-relations-features-section-blocks-to-features-contracts";
import { IRelation as IWidgetToFeaturesSectionBlock } from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-contracts";

export interface IModel extends IParentModel {
  featuresSectionBlocksToFeatures: IFeaturesSectionBlockToFeature[];
  widgetsToFeaturesSectionBlocks: IWidgetToFeaturesSectionBlock[];
}
