import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-faq-block-contracts";
import { spsLiteEntity as faq } from "@sps/sps-website-builder-models-faq-contracts";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  faqs: Array(4).fill(faq),
};
