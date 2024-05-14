import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";
import { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  featuresSectionBlock: IFeaturesSectionBlock;
}
