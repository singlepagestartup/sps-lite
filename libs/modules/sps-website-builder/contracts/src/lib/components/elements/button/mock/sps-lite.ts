import { faker } from "@faker-js/faker";
import type { IComponent } from "../interfaces";

export const entity: IComponent = {
  id: 4,
  title: faker.lorem.words(3),
  url: faker.internet.url(),
  variant: "secondary",
  __component: "elements.button",
  description: null,
  className: null,
  additionalAttributes: null,
};
