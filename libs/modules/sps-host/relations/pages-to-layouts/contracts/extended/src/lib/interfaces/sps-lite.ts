import type { IRelation as IParentRelation } from "@sps/sps-host/relations/pages-to-layouts/contracts/root";
import { IModel as IPage } from "@sps/sps-host/models/page/contracts/root";

import { IModel as ILayout } from "@sps/sps-host/models/layout/contracts/root";

export interface IRelation extends IParentRelation {
  page: IPage;

  layout: ILayout;
}
