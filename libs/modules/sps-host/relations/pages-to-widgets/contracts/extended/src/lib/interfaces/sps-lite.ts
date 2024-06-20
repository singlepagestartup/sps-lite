import type { IRelation as IParentRelation } from "@sps/sps-host/relations/pages-to-widgets/contracts/root";
import { IModel as IPage } from "@sps/sps-host/models/page/contracts/root";

import { IModel as IWidget } from "@sps/sps-host/models/widget/contracts/root";

export interface IRelation extends IParentRelation {
  page: IPage;

  widget: IWidget;
}
