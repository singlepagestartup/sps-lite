import { ISpsLiteBackendComponentLogotype } from "../../../elements/logotype/interfaces/sps-lite";
import { ISpsLiteBackendComponentHeroSectionBlock } from "./sps-lite";

export interface ISpsBackendComponentHeroSectionBlock
  extends Omit<ISpsLiteBackendComponentHeroSectionBlock, "variant"> {
  variant: ISpsLiteBackendComponentHeroSectionBlock["variant"] | "split";
  logotype?: ISpsLiteBackendComponentLogotype | null;
}
