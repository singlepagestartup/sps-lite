import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/contracts/root";
import { IModel as ISliderBlock } from "@sps/sps-website-builder/models/slider-block/sdk/model";
import { IModel as ISlider } from "@sps/sps-website-builder/models/slider/sdk/model";

export interface IRelation extends IParentRelation {
  sliderBlock: ISliderBlock;
  slider: ISlider;
}
