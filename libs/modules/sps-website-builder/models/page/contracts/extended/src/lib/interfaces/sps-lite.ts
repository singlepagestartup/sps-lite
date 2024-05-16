import type { IModel as IParentModel } from "@sps/sps-website-builder-models-page-contracts";
import type { IModel as IMetatag } from "@sps/sps-website-builder-models-metatag-contracts";
import { IRelation as IPagesToLayouts } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts";
import { IModel as IPagesToWidgets } from "@sps/sps-website-builder-relations-pages-to-widgets-contracts";

export interface IModel extends IParentModel {
  metatag?: IMetatag | null;
  pagesToLayouts: IPagesToLayouts[];
  pagesToWidgets: IPagesToWidgets[];
}
