import type { IModel as IParentModel } from "@sps/sps-website-builder/models/navbar/contracts/root";
import { IRelation as INavbarToWidget } from "@sps/sps-website-builder/relations/navbars-to-widgets/contracts/root";

export interface IModel extends IParentModel {
  navbarsToWidgets: INavbarToWidget[];
}
