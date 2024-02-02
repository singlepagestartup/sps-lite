import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/theme/interfaces";
import type { IModel as IFont } from "@sps/sps-website-builder-contracts/lib/models/font/interfaces";

export interface IModel extends IParentModel {
  fonts?: IFont[] | null;
}
