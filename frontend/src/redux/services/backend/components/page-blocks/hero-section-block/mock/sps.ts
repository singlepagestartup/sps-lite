import { entity as logotype } from "~redux/services/backend/components/elements/logotype/mock/sps-lite";
import { entity as spsLiteEntity } from "./sps-lite";
import { ISpsBackendComponentHeroSectionBlock } from "../interfaces/sps";

export const entity: ISpsBackendComponentHeroSectionBlock = {
  ...spsLiteEntity,
  variant: "split",
  logotype: logotype,
};
