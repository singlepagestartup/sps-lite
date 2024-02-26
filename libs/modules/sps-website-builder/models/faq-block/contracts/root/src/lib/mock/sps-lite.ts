import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  id: 2,
  title: faker.lorem.sentence(),
  anchor: "faq-anchor",
  className: faker.lorem.slug(),
  subtitle: faker.lorem.sentence(),
  variant: "two-columns-with-centered-introduction",
  __component: "page-blocks.faqs-block",
  description: faker.lorem.paragraph(),
};
