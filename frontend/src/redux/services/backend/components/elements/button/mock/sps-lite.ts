import { faker } from "@faker-js/faker";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 4,
  title: faker.lorem.words(3),
  url: faker.internet.url(),
  variant: "secondary",
  __component: "elements.button",
  description: null,
  className: null,
  additionalAttributes: null,
  flyout: null,
};
