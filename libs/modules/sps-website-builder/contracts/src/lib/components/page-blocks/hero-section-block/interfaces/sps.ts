import type { IComponent as IParentComponent } from "./sps-lite";

export interface IComponent extends Omit<IParentComponent, "variant"> {
  variant: IParentComponent["variant"] | "split";
}
