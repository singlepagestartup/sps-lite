import { IRelation as IWidgetsToSpsWebsiteBuilderModuleWidgets } from "@sps/sps-host-relations-widgets-to-sps-website-builder-module-widgets-contracts";
import { IRelation as IPagesToWidgets } from "@sps/sps-host-relations-pages-to-widgets-contracts";
import type { IModel as IParentModel } from "@sps/sps-host-models-widget-contracts";

export interface IModel extends IParentModel {
  widgetsToSpsWebsiteBuilderModuleWidgets: IWidgetsToSpsWebsiteBuilderModuleWidgets[];
  pagesToWidgets: IPagesToWidgets[];
}
