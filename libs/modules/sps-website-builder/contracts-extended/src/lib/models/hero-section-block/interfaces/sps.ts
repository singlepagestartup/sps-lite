import type { IModel as ILogotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/interfaces";
import type { IModel as IParentModel } from "./sps-lite";

export interface IModel extends IParentModel {
  logotype?: ILogotype | null;
}
