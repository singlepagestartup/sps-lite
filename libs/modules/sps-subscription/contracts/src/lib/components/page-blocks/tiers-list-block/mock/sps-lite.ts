import { faker } from "@faker-js/faker";
import { entity as tier } from "../../../../entities/tier/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 2,
  __component: "page-blocks.tiers-list-block",
  variant: "two-columns-card",
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  anchor: faker.lorem.slug(),
  description: faker.lorem.paragraph(),
  className: null,
  tiers: [tier],
  media: null,
  additionalMedia: null,
};