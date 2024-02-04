import type { IModel as IParentModel } from "./sps-lite";

export interface IModel extends Omit<IParentModel, "variant"> {
  variant: IParentModel["variant"] | "split";
}
