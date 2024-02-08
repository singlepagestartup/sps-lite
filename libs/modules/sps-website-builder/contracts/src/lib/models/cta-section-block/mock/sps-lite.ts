import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  id: 3,
  title: faker.lorem.sentence(),
  variant: "dark-with-image",
  className: faker.lorem.slug(),
  subtitle: "Subtitle",
  anchor: faker.lorem.slug(),
  __component: "page-blocks.cta-section-block",
  description: faker.lorem.paragraph(),
};
