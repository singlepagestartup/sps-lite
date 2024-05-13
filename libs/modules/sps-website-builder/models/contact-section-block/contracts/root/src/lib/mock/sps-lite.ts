import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

export const entity = {
  id: 2,
  __component: "page-blocks.contact-section-block",
  title: faker.lorem.sentence(),
  subtitle: null,
  description: faker.lorem.paragraph(),
  anchor: null,
  className: null,
  variant: "centered",
};
