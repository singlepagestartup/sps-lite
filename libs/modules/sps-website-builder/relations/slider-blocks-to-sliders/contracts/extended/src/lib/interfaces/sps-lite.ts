import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-contracts";
import { IModel as ISliderBlock } from "@sps/sps-website-builder-models-slider-block-contracts";
import { IModel as ISlider } from "@sps/sps-website-builder-models-slider-contracts";

export interface IRelation extends IParentRelation {
  sliderBlock: ISliderBlock;
  slider: ISlider;
}
