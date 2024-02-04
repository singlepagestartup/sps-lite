import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  id: 9,
  variant: "simple-centered",
  __component: "page-blocks.header-section-block",
  title: faker.lorem.sentence(),
  className: faker.lorem.slug(),
  subtitle: faker.lorem.sentence(),
  anchor: "header-section-anchor",
  description: faker.lorem.paragraph(),
};
