import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  id: 2,
  __component: "page-blocks.footer-block",
  variant: "four-columns-with-company-mission",
  className: faker.lorem.slug(),
  copyrights: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
};
