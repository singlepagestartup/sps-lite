import { ISpsBackendHeroSectionBlock } from "types/components/page-blocks/sps";
import { spsLiteBackendHeroSectionBlockSimpleCentered } from "./sps-lite";
import { spsLiteUploadPluginBackendMediaLogotypeIcon } from "~mocks/plugins/upload/sps-lite";

export const spsBackendHeroSectionBlockSplit: ISpsBackendHeroSectionBlock = {
  ...spsLiteBackendHeroSectionBlockSimpleCentered,
  variant: `split`,
  logotype: spsLiteUploadPluginBackendMediaLogotypeIcon,
};
