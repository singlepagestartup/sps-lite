import type { IComponent as ILogotype } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/interfaces";
import type { IComponent as IParentComponent } from "./sps-lite";

export interface IComponent extends IParentComponent {
  logotype?: ILogotype | null;
}
