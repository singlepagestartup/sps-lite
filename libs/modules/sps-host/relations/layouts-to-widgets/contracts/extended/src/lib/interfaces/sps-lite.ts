import type { IRelation as IParentRelation } from "@sps/sps-host/relations/layouts-to-widgets/contracts/root";
import { IModel as ILayout } from "@sps/sps-host/models/layout/contracts/root";

import { IModel as IWidget } from "@sps/sps-host/models/widget/contracts/root";

export interface IRelation extends IParentRelation {
  layout: ILayout;

  widget: IWidget;
}
