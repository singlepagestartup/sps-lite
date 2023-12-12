import { IComponent as IBackendComponentLogotype } from "../../../elements/logotype/interfaces";
import { IBackendComponentPageBlock as IParentBackendComponentPageBlock } from "./sps-lite";

export interface IBackendComponentPageBlock
  extends Omit<IParentBackendComponentPageBlock, "variant"> {
  variant: IParentBackendComponentPageBlock["variant"] | "split";
  logotype?: IBackendComponentLogotype | null;
}
