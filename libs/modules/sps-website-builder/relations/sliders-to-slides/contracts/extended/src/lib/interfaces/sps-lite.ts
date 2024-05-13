import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-sliders-to-slides-contracts";
import { IModel as ISlider } from "@sps/sps-website-builder-models-slider-contracts";
import { IModel as ISlide } from "@sps/sps-website-builder-models-slide-contracts";

export interface IRelation extends IParentRelation {
  slider: ISlider;
  slide: ISlide;
}
