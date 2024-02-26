import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  id: 3,
  __component: "page-blocks.not-found-block",
  variant: "simple",
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  className: null,
  description: faker.lorem.paragraph(),
  anchor: null,
};
