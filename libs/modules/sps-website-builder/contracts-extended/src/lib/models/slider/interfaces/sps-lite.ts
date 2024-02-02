import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/slider/interfaces";
import type { IModel as ISlide } from "@sps/sps-website-builder-contracts/lib/models/slide/interfaces";

export interface IModel extends IParentModel {
  slides: ISlide[];
}
