import type { IModel as IParentComponent } from "./sps-lite";

export interface IModel extends Omit<IParentComponent, "variant"> {
  variant: IParentComponent["variant"] | "split";
}
