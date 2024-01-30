import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 1,
  __component: "elements.slide",
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  subtitle: null,
};
