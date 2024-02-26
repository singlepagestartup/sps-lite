import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  id: 1,
  __component: "page-blocks.alert-block",
  title: faker.lorem.sentence(),
  subtitle: null,
  description: faker.lorem.paragraph(),
  className: faker.lorem.slug(),
  anchor: faker.lorem.slug(),
  variant: "centered",
};
