import { IComponent as IBackendComponentLogotype } from "../../../elements/logotype/interfaces";
import { IComponent as IParentComponent } from "./sps-lite";

export interface IComponent extends Omit<IParentComponent, "variant"> {
  variant: IParentComponent["variant"] | "split";
  logotype?: IBackendComponentLogotype | null;
}
