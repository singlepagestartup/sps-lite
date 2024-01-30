import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces";

export const entity: IComponent = {
  id: 5,
  __component: "page-blocks.logotypes-cloud-block",
  variant: "simple-with-heading",
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  className: null,
  anchor: faker.lorem.slug(),
};
