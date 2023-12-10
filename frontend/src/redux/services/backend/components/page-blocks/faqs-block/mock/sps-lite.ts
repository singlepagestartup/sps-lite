import { faker } from "@faker-js/faker";
import { ISpsLiteBackendFaqsBlock } from "../interfaces/sps-lite";
import { entity as faq } from "~redux/services/backend/components/elements/faq/mock/sps-lite";

export const entity: ISpsLiteBackendFaqsBlock = {
  id: 2,
  title: faker.lorem.sentence(),
  anchor: "faq-anchor",
  className: faker.lorem.slug(),
  subtitle: faker.lorem.sentence(),
  variant: "two-columns-with-centered-introduction",
  __component: "page-blocks.faqs-block",
  description: faker.lorem.paragraph(),
  faqs: Array(4).fill({ ...faq }),
};
