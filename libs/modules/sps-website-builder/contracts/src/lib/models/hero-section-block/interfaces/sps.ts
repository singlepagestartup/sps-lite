import type { IModel as IParentModel } from "./sps-lite";

export interface IModel extends Omit<IParentComponent, "variant"> {
  variant: IParentComponent["variant"] | "split";
}
