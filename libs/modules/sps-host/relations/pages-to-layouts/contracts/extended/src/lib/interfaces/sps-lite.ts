import type { IRelation as IParentRelation } from "@sps/sps-host-relations-pages-to-layouts-contracts";
import { IModel as IPage } from "@sps/sps-host-models-page-contracts";

import { IModel as ILayout } from "@sps/sps-host-models-layout-contracts";

export interface IRelation extends IParentRelation {
  page: IPage;

  layout: ILayout;
}
