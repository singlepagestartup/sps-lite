import type { IModel as IParentModel } from "@sps/sps-website-builder/models/footer/contracts/root";
import { IRelation as IFooterToWidget } from "@sps/sps-website-builder/relations/footers-to-widgets/contracts/root";
import { IRelation as ILayoutToFooter } from "@sps/sps-website-builder/relations/layouts-to-footers/contracts/root";

export interface IModel extends IParentModel {
  footersToWidgets: IFooterToWidget[];
  layoutsToFooters: ILayoutToFooter[];
}
