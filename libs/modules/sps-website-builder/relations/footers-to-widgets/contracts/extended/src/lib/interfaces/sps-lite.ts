import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/footers-to-widgets/contracts/root";
import { IModel as IFooter } from "@sps/sps-website-builder/models/footer/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/contracts/root";

export interface IRelation extends IParentRelation {
  footer: IFooter;
  widget: IWidget;
}
