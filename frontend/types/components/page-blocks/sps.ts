import { ISpsLiteBackendHeroSectionBlock } from "./sps-lite";

export interface ISpsBackendHeroSectionBlock
  extends Omit<ISpsLiteBackendHeroSectionBlock, `variant`> {
  variant: ISpsLiteBackendHeroSectionBlock[`variant`] | `split`;
}
