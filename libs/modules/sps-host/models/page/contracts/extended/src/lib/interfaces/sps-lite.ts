import { IRelation as IPagesToWidgets } from "@sps/sps-host/relations/pages-to-widgets/contracts/root";
import { IRelation as IPagesToMetadata } from "@sps/sps-host/relations/pages-to-metadata/contracts/root";
import { IRelation as IPagesToLayouts } from "@sps/sps-host/relations/pages-to-layouts/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-host/models/page/contracts/root";

export interface IModel extends IParentModel {
  pagesToWidgets: IPagesToWidgets[];
  pagesToMetadata: IPagesToMetadata[];
  pagesToLayouts: IPagesToLayouts[];
}
