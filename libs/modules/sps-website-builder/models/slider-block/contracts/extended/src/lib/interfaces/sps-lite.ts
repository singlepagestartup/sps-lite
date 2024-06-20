import type { IModel as IParentModel } from "@sps/sps-website-builder/models/slider-block/contracts/root";
import type { IModel as ISlider } from "@sps/sps-website-builder/models/slider/contracts/root";
import { IRelation as ISliderBlockToSlider } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/contracts/root";

export interface IModel extends IParentModel {
  slider?: ISlider | null;
  sliderBlocksToSliders: ISliderBlockToSlider[];
}
