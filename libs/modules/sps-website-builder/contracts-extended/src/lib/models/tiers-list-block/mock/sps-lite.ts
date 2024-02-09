import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/tiers-list-block/mock/sps-lite";
import { entity as tier } from "@sps/sps-subscription-contracts/lib/models/tier/mock/sps-lite";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  tiers: [tier],
  media: null,
  additionalMedia: null,
};
