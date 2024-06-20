import { IRelation as ILayoutsToWidgets } from "@sps/sps-host/relations/layouts-to-widgets/contracts/root";
import { IRelation as IPagesToLayouts } from "@sps/sps-host/relations/pages-to-layouts/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-host/models/layout/contracts/root";

export interface IModel extends IParentModel {
  layoutsToWidgets: ILayoutsToWidgets[];
  pagesToLayouts: IPagesToLayouts[];
}
