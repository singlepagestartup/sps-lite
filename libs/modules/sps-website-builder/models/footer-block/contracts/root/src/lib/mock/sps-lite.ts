import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  id: "bdc2ad8f-8b91-4eaa-9407-0a3955ff86e9",
  __component: "page-blocks.footer-block",
  variant: "four-columns-with-company-mission",
  className: faker.lorem.slug(),
  copyrights: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
};
