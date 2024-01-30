import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 3,
  __component: "page-blocks.not-found-block",
  variant: "simple",
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  className: null,
  description: faker.lorem.paragraph(),
  anchor: null,
};