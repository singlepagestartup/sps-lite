import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/slider-block/interfaces";
import type { IModel as ISlider } from "@sps/sps-website-builder-contracts/lib/models/slider/interfaces";

export interface IModel extends IParentModel {
  slider?: ISlider | null;
}
