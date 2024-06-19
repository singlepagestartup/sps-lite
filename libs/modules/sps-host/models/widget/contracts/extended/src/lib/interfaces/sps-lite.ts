import { IRelation as IPagesToWidgets } from "@sps/sps-host-relations-pages-to-widgets-contracts";
import type { IModel as IParentModel } from "@sps/sps-host-models-widget-contracts";

export interface IModel extends IParentModel {
  pagesToWidgets: IPagesToWidgets[];
}
