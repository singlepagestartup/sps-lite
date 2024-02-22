import type { IModel as IParentModel } from "@sps/sps-website-builder-models-slider-block-contracts";
import type { IModel as ISlider } from "@sps/sps-website-builder-models-slider-contracts";

export interface IModel extends IParentModel {
  slider?: ISlider | null;
}
