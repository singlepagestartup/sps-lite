import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 9,
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  subtitle: null,
  className: null,
  anchor: faker.lorem.slug(),
  __component: "page-blocks.incentives-block",
  variant: "four-column-with-illustrations",
};
