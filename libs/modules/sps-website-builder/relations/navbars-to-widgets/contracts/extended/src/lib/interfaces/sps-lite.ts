import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-navbars-to-widgets-contracts";
import { IModel as INavbar } from "@sps/sps-website-builder-models-navbar-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";

export interface IRelation extends IParentRelation {
  navbar: INavbar;
  widget: IWidget;
}
