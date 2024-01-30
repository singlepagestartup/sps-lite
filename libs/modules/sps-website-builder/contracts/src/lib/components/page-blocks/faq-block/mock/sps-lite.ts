import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 2,
  title: faker.lorem.sentence(),
  anchor: "faq-anchor",
  className: faker.lorem.slug(),
  subtitle: faker.lorem.sentence(),
  variant: "two-columns-with-centered-introduction",
  __component: "page-blocks.faqs-block",
  description: faker.lorem.paragraph(),
};
