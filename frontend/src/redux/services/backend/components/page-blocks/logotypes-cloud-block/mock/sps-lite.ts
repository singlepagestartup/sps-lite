import { faker } from "@faker-js/faker";
import { entity as logotype } from "~redux/services/backend/components/elements/logotype/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 5,
  __component: "page-blocks.logotypes-cloud-block",
  variant: "simple-with-heading",
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  className: null,
  anchor: faker.lorem.slug(),
  logotypes: Array(5).fill({ ...logotype }),
  buttons: null,
};
