import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-footers-to-widgets-contracts";
import { IModel as IFooter } from "@sps/sps-website-builder-models-footer-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";

export interface IRelation extends IParentRelation {
  footer: IFooter;
  widget: IWidget;
}
