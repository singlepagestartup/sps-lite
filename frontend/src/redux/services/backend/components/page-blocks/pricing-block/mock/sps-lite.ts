import { faker } from "@faker-js/faker";
import { entity as tier } from "~redux/services/backend/extensions/sps-billing/api/tier/mock/sps-lite";
import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 2,
  __component: "page-blocks.pricing-block",
  variant: "two-columns-card",
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  anchor: faker.lorem.slug(),
  description: faker.lorem.paragraph(),
  className: null,
  tiers: Array(2).fill({ ...tier }),
  media: [{ ...file }],
  additionalMedia: [{ ...file }],
};
