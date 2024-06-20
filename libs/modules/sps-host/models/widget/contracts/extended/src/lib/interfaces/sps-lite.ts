import { IRelation as ILayoutsToWidgets } from "@sps/sps-host/relations/layouts-to-widgets/contracts/root";
import { IRelation as IWidgetsToExternalModules } from "@sps/sps-host/relations/widgets-to-external-modules/contracts/root";
import { IRelation as IPagesToWidgets } from "@sps/sps-host/relations/pages-to-widgets/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-host/models/widget/contracts/root";

export interface IModel extends IParentModel {
  layoutsToWidgets: ILayoutsToWidgets[];
  widgetsToExternalModules: IWidgetsToExternalModules[];
  pagesToWidgets: IPagesToWidgets[];
}
