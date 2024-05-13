import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-layouts-to-navbars-contracts";
import { IModel as ILayout } from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as INavbar } from "@sps/sps-website-builder-models-navbar-contracts";

export interface IRelation extends IParentRelation {
  layout: ILayout;
  navbar: INavbar;
}
