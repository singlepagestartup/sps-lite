import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  id: "a9709ba1-07e2-4ce7-bac3-0b052600b3fc",
  __component: "page-blocks.navbar-block",
  variant: "simple-links-on-left",
  description: faker.lorem.paragraph(),
  className: faker.lorem.slug(),
};
