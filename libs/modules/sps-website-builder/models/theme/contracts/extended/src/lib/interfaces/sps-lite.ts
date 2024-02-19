import type { IModel as IParentModel } from "@sps/sps-website-builder-theme-contracts";
import type { IModel as IFont } from "@sps/sps-website-builder-font-contracts";

export interface IModel extends IParentModel {
  fonts?: IFont[] | null;
}
