import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-layouts-to-footers-contracts";
import { IModel as ILayout } from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IFooter } from "@sps/sps-website-builder-models-footer-contracts";

export interface IRelation extends IParentRelation {
  layout: ILayout;
  footer: IFooter;
}
