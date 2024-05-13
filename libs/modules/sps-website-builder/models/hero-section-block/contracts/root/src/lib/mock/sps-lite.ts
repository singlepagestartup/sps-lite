import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

export const entity = {
  id: "4",
  variant: "default",
  className: faker.lorem.slug(),
  anchor: faker.lorem.slug(),
  title: faker.lorem.words(10),
  description: faker.lorem.paragraphs(2),
};
