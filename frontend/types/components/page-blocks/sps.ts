import { ISpsLiteBackendHeroSectionBlock } from "./sps-lite";
import { ISpsLiteBackendLogotype } from "../elements/sps-lite";

export interface ISpsBackendHeroSectionBlock
  extends Omit<ISpsLiteBackendHeroSectionBlock, `variant`> {
  variant: ISpsLiteBackendHeroSectionBlock[`variant`] | `split`;
  logotype?: ISpsLiteBackendLogotype | null;
}
