import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-tiers-list-block-contracts";
import { spsLiteEntity as tier } from "@sps/sps-subscription-tier-contracts";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  tiers: [tier],
  media: null,
  additionalMedia: null,
};
