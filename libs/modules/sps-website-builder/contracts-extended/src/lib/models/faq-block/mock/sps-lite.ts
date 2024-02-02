import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/faq-block/mock/sps-lite";
import { entity as faq } from "@sps/sps-website-builder-contracts/lib/models/faq/mock/sps-lite";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  faqs: Array(4).fill(faq),
};
