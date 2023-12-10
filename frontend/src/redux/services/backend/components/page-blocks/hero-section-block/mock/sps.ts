import { entity as logotype } from "~redux/services/backend/components/elements/logotype/mock/sps-lite";
import { ISpsBackendHeroSectionBlock } from "../interfaces/sps";
import { entity as spsLiteEntity } from "./sps-lite";

export const entity: ISpsBackendHeroSectionBlock = {
  ...spsLiteEntity,
  variant: "split",
  logotype: logotype,
};
