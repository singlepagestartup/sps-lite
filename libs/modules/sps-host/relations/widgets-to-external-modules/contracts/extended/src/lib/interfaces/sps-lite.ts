import type { IRelation as IParentRelation } from "@sps/sps-host-relations-widgets-to-external-modules-contracts";
import { IModel as IWidget } from "@sps/sps-host-models-widget-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;
}
