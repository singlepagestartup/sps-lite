import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";
import { ISpsLiteBackendHeroSectionBlock } from "./sps-lite";

export interface ISpsBackendHeroSectionBlock
  extends Omit<ISpsLiteBackendHeroSectionBlock, `variant`> {
  variant: ISpsLiteBackendHeroSectionBlock[`variant`] | `split`;
  logotype: ISpsLiteBackendUploadPluginBackendMedia;
}
