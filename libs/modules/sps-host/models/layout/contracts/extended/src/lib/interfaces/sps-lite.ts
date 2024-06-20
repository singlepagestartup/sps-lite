import { IRelation as ILayoutsToWidgets } from "@sps/sps-host-relations-layouts-to-widgets-contracts";
import { IRelation as IPagesToLayouts } from "@sps/sps-host-relations-pages-to-layouts-contracts";
import type { IModel as IParentModel } from "@sps/sps-host-models-layout-contracts";

export interface IModel extends IParentModel {
  layoutsToWidgets: ILayoutsToWidgets[];
  pagesToLayouts: IPagesToLayouts[];
}
