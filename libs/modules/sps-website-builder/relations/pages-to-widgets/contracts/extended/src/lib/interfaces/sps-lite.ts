import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-pages-to-widgets-contracts";
import { IModel as IPage } from "@sps/sps-website-builder-models-page-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";

export interface IRelation extends IParentRelation {
  page: IPage;
  widget: IWidget;
}
