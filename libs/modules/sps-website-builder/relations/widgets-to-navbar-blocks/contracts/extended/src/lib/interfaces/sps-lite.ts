import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";
import { IModel as INavbarBlock } from "@sps/sps-website-builder-models-navbar-block-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  navbarBlock: INavbarBlock;
}
