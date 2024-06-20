import type { IRelation as IParentRelation } from "@sps/sps-host/relations/widgets-to-external-modules/contracts/root";
import { IModel as IWidget } from "@sps/sps-host/models/widget/contracts/root";

export interface IRelation extends IParentRelation {
  widget: IWidget;
}
