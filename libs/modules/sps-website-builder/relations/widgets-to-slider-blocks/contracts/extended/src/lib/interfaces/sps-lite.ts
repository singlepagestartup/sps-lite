import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";
import { IModel as ISliderBlock } from "@sps/sps-website-builder-models-slider-block-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  sliderBlock: ISliderBlock;
}
