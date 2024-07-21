import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/footers-to-widgets/contracts/root";
import { IModel as IFooter } from "@sps/sps-website-builder/models/footer/sdk/model";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/sdk/model";

export interface IRelation extends IParentRelation {
  footer: IFooter;
  widget: IWidget;
}
