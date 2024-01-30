import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces";

export const entity: IComponent = {
  id: 2,
  __component: "page-blocks.navbar-block",
  variant: "simple-links-on-left",
  description: faker.lorem.paragraph(),
  className: faker.lorem.slug(),
};
