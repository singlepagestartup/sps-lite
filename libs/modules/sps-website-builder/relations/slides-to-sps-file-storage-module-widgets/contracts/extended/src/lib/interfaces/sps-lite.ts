import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-slides-to-sps-file-storage-module-widgets-contracts";
import { IModel as ISlide } from "@sps/sps-website-builder-models-slide-contracts";

export interface IRelation extends IParentRelation {
  slide: ISlide;
}
