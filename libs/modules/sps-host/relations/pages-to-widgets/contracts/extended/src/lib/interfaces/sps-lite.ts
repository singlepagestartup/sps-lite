import type { IRelation as IParentRelation } from "@sps/sps-host-relations-pages-to-widgets-contracts";
import { IModel as IPage } from "@sps/sps-host-models-page-contracts";

import { IModel as IWidget } from "@sps/sps-host-models-widget-contracts";

export interface IRelation extends IParentRelation {
  page: IPage;

  widget: IWidget;
}
