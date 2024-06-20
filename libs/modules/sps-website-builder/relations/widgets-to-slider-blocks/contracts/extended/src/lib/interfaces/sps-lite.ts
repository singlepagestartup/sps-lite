import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/contracts/root";
import { IModel as ISliderBlock } from "@sps/sps-website-builder/models/slider-block/contracts/root";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  sliderBlock: ISliderBlock;
}
