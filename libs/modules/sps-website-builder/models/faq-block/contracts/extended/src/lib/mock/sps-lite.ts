import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-faq-block-contracts";
import { spsLiteEntity as faq } from "@sps/sps-website-builder-faq-contracts";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  faqs: Array(4).fill(faq),
};
