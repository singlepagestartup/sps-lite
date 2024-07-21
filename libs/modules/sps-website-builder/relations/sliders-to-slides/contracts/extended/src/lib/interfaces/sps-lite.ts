import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/sliders-to-slides/contracts/root";
import { IModel as ISlider } from "@sps/sps-website-builder/models/slider/sdk/model";
import { IModel as ISlide } from "@sps/sps-website-builder/models/slide/sdk/model";

export interface IRelation extends IParentRelation {
  slider: ISlider;
  slide: ISlide;
}
