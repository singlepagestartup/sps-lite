import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/navbars-to-widgets/contracts/root";
import { IModel as INavbar } from "@sps/sps-website-builder/models/navbar/sdk/model";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/sdk/model";

export interface IRelation extends IParentRelation {
  navbar: INavbar;
  widget: IWidget;
}
