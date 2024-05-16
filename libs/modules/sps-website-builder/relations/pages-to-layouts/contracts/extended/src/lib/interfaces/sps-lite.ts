import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts";
import { IModel as ILayout } from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IPage } from "@sps/sps-website-builder-models-page-contracts";

export interface IRelation extends IParentRelation {
  layout: ILayout;
  page: IPage;
}
