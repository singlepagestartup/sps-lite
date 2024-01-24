import { faker } from "@faker-js/faker";
import { entity as tier } from "@sps/sps-subscription-frontend/lib/redux/entities/tier/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 2,
  __component: "page-blocks.tiers-list-block",
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
