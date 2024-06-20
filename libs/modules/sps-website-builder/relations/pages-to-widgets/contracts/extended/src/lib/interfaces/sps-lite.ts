import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/pages-to-widgets/contracts/root";
import { IModel as IPage } from "@sps/sps-website-builder/models/page/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/contracts/root";

export interface IRelation extends IParentRelation {
  page: IPage;
  widget: IWidget;
}
