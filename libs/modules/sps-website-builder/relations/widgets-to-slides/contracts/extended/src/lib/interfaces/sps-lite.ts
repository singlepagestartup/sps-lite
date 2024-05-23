import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-slides-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";

import { IModel as ISlide } from "@sps/sps-website-builder-models-slide-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;

  slide: ISlide;
}
