import type { IModel as IParentModel } from "@sps/sps-website-builder/models/slider/contracts/root";
import type { IModel as ISlide } from "@sps/sps-website-builder/models/slide/contracts/root";
import { IRelation as ISliderToSlide } from "@sps/sps-website-builder/relations/sliders-to-slides/contracts/root";

export interface IModel extends IParentModel {
  slides: ISlide[];
  slidersToSlides: ISliderToSlide[];
}
