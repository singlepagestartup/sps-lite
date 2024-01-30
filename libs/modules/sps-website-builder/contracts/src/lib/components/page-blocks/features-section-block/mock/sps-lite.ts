import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 32,
  title: faker.lorem.sentence(),
  variant: "with-icon",
  className: null,
  subtitle: faker.lorem.sentence(),
  anchor: faker.lorem.slug(),
  description: faker.lorem.paragraph(),
  __component: "page-blocks.features-section-block",
};
