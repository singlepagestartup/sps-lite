import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/contracts/root";
import { IModel as ISlide } from "@sps/sps-website-builder/models/slide/contracts/root";

export interface IRelation extends IParentRelation {
  slide: ISlide;
}
