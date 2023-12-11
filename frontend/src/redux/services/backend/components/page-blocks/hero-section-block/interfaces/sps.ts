import { IBackendComponentElement as ISpsLiteBackendComponentLogotype } from "../../../elements/logotype/interfaces/sps-lite";
import { IBackendComponentPageBlock as IParentBackendComponentPageBlock } from "./sps-lite";

export interface IBackendComponentPageBlock
  extends Omit<IParentBackendComponentPageBlock, "variant"> {
  variant: IParentBackendComponentPageBlock["variant"] | "split";
  logotype?: ISpsLiteBackendComponentLogotype | null;
}
