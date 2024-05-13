import type { IModel as IParentModel } from "@sps/sps-website-builder-models-slider-block-contracts";
import type { IModel as ISlider } from "@sps/sps-website-builder-models-slider-contracts";
import { IRelation as ISliderBlocksToSliders } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-contracts";

export interface IModel extends IParentModel {
  slider?: ISlider | null;
  SPSWBSliderBlocksToSliders: ISliderBlocksToSliders[];
}
