import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  id: 2,
  __component: "page-blocks.navbar-block",
  variant: "simple-links-on-left",
  description: faker.lorem.paragraph(),
  className: faker.lorem.slug(),
};
