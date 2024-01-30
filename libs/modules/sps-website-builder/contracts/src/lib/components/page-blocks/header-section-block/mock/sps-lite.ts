import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 9,
  variant: "simple-centered",
  __component: "page-blocks.header-section-block",
  title: faker.lorem.sentence(),
  className: faker.lorem.slug(),
  subtitle: faker.lorem.sentence(),
  anchor: "header-section-anchor",
  description: faker.lorem.paragraph(),
};
