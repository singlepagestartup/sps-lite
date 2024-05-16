import type { IModel as IParentModel } from "@sps/sps-website-builder-models-navbar-contracts";
import { IRelation as INavbarToWidget } from "@sps/sps-website-builder-relations-navbars-to-widgets-contracts";

export interface IModel extends IParentModel {
  navbarsToWidgets: INavbarToWidget[];
}
