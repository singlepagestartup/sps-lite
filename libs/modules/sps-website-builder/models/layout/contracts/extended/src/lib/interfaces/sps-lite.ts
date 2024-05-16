import type { IModel as IParentModel } from "@sps/sps-website-builder-models-layout-contracts";
import { IRelation as ILayoutToNavbar } from "@sps/sps-website-builder-relations-layouts-to-navbars-contracts";
import { IRelation as ILayoutToFooter } from "@sps/sps-website-builder-relations-layouts-to-footers-contracts";
import { IRelation as IPageToLayout } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts";

export interface IModel extends IParentModel {
  pagesToLayouts: IPageToLayout[];
  layoutsToNavbars: ILayoutToNavbar[];
  layoutsToFooters: ILayoutToFooter[];
}
