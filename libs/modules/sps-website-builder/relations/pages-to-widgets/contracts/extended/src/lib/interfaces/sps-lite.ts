import type { IModel as IParentModel } from "@sps/sps-website-builder-relations-pages-to-widgets-contracts";
import { IModel as IPage } from "@sps/sps-website-builder-models-page-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";

export interface IModel extends IParentModel {
  page: IPage;
  widget: IWidget;
}
