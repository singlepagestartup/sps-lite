import type { IModel as IParentModel } from "@sps/sps-website-builder-slider-contracts";
import type { IModel as ISlide } from "@sps/sps-website-builder-slide-contracts";

export interface IModel extends IParentModel {
  slides: ISlide[];
}
