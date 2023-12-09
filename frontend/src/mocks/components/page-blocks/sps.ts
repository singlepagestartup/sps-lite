import { spsLiteBackendHeroSectionBlockSimpleCentered } from "./sps-lite";
import { spsLiteBackendLogotype } from "../elements/sps-lite";
import { ISpsBackendHeroSectionBlock } from "~redux/services/backend/components/page-blocks/hero-section-block/interfaces/sps";

export const spsBackendHeroSectionBlockSplit: ISpsBackendHeroSectionBlock = {
  ...spsLiteBackendHeroSectionBlockSimpleCentered,
  variant: "split",
  logotype: { ...spsLiteBackendLogotype },
};
