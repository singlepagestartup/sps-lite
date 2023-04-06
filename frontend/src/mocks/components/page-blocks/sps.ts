import { ISpsBackendHeroSectionBlock } from "types/components/page-blocks/sps";
import { spsLiteBackendHeroSectionBlockSimpleCentered } from "./sps-lite";
import { spsLiteBackendLogotype } from "../elements/sps-lite";

export const spsBackendHeroSectionBlockSplit: ISpsBackendHeroSectionBlock = {
  ...spsLiteBackendHeroSectionBlockSimpleCentered,
  variant: `split`,
  logotype: spsLiteBackendLogotype,
};
