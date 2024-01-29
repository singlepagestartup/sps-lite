import { faker } from "@faker-js/faker";
import { entity as button } from "../../../elements/button/mock/sps-lite";
import type { IComponent } from "../interfaces";

export const entity: IComponent = {
  id: 3,
  __component: "page-blocks.not-found-block",
  variant: "simple",
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  className: null,
  description: faker.lorem.paragraph(),
  buttons: Array(1).fill({ ...button }),
  media: null,
  additionalMedia: null,
  anchor: null,
};
