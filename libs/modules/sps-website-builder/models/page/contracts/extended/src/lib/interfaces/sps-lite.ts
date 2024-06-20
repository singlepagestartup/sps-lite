import { IRelation as IPagesToMetadata } from "@sps/sps-website-builder/relations/pages-to-metadata/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-website-builder/models/page/contracts/root";
import { IRelation as IPagesToLayouts } from "@sps/sps-website-builder/relations/pages-to-layouts/contracts/root";
import { IRelation as IPagesToWidgets } from "@sps/sps-website-builder/relations/pages-to-widgets/contracts/root";

export interface IModel extends IParentModel {
  pagesToMetadata: IPagesToMetadata[];
  pagesToLayouts: IPagesToLayouts[];
  pagesToWidgets: IPagesToWidgets[];
}
