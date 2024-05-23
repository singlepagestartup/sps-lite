import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-logotypes-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";

import { IModel as ILogotype } from "@sps/sps-website-builder-models-logotype-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;

  logotype: ILogotype;
}
