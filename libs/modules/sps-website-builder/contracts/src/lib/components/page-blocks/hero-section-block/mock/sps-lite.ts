import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 4,
  variant: "simple-centered",
  className: faker.lorem.slug(),
  anchor: faker.lorem.slug(),
  title: faker.lorem.words(10),
  description: faker.lorem.paragraphs(2),
  __component: "page-blocks.hero-section-block",
};
