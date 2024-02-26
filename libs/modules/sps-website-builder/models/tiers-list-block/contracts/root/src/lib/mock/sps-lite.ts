import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  id: 2,
  __component: "page-blocks.tiers-list-block",
  variant: "two-columns-card",
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  anchor: faker.lorem.slug(),
  description: faker.lorem.paragraph(),
  className: null,
};
