import { faker } from "@faker-js/faker";
import { entity as feature } from "../../../elements/feature/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 9,
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  subtitle: null,
  className: null,
  anchor: faker.lorem.slug(),
  __component: "page-blocks.incentives-block",
  variant: "four-column-with-illustrations",
  features: Array(4).fill({ ...feature }),
  media: [{ ...file }],
  additionalMedia: [{ ...file }],
};