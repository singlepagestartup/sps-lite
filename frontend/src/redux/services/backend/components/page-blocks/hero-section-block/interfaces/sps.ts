import { ISpsLiteBackendLogotype } from "../../../elements/logotype/interfaces/sps-lite";
import { ISpsLiteBackendHeroSectionBlock } from "./sps-lite";

export interface ISpsBackendHeroSectionBlock
  extends Omit<ISpsLiteBackendHeroSectionBlock, "variant"> {
  variant: ISpsLiteBackendHeroSectionBlock["variant"] | "split";
  logotype?: ISpsLiteBackendLogotype | null;
}
