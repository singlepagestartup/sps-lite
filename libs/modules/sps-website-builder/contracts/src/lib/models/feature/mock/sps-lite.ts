import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  id: 136,
  __component: "elements.feature",
  title: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  subtitle: faker.lorem.sentences(1),
};
