import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/faq-block/mock/sps-lite";
import { entity as faq } from "@sps/sps-website-builder-contracts/lib/components/elements/faq/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  ...parentEntity,
  faqs: Array(4).fill(faq),
};
