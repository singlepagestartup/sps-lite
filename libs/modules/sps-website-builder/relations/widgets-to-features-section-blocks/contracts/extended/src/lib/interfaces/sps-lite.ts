import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-features-section-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/contracts/root";
import { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder/models/features-section-block/sdk/model";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  featuresSectionBlock: IFeaturesSectionBlock;
}
