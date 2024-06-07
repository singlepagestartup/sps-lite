import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-sps-rbac-module-widgets-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;
}