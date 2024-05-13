import type { IModel as IParentModel } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts";
import { IModel as ILayout } from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IPage } from "@sps/sps-website-builder-models-page-contracts";

export interface IModel extends IParentModel {
  layout: ILayout;
  page: IPage;
}
