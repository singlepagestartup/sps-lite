import type { IModel as IParentModel } from "@sps/sps-website-builder/models/layout/contracts/root";
import { IRelation as ILayoutToNavbar } from "@sps/sps-website-builder/relations/layouts-to-navbars/contracts/root";
import { IRelation as ILayoutToFooter } from "@sps/sps-website-builder/relations/layouts-to-footers/contracts/root";
import { IRelation as IPageToLayout } from "@sps/sps-website-builder/relations/pages-to-layouts/contracts/root";

export interface IModel extends IParentModel {
  pagesToLayouts: IPageToLayout[];
  layoutsToNavbars: ILayoutToNavbar[];
  layoutsToFooters: ILayoutToFooter[];
}
