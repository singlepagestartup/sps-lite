import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/sdk/model";
import { IModel as ISliderBlock } from "@sps/sps-website-builder/models/slider-block/sdk/model";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  sliderBlock: ISliderBlock;
}
