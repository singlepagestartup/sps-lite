import { IRelation as IPagesToWidgets } from "@sps/sps-host-relations-pages-to-widgets-contracts";
import { IRelation as IPagesToMetadata } from "@sps/sps-host-relations-pages-to-metadata-contracts";
import { IRelation as IPagesToLayouts } from "@sps/sps-host-relations-pages-to-layouts-contracts";
import type { IModel as IParentModel } from "@sps/sps-host-models-page-contracts";

export interface IModel extends IParentModel {
  pagesToWidgets: IPagesToWidgets[];
  pagesToMetadata: IPagesToMetadata[];
  pagesToLayouts: IPagesToLayouts[];
}
