import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-sps-rbac-module-widgets/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/contracts/root";

export interface IRelation extends IParentRelation {
  widget: IWidget;
}
