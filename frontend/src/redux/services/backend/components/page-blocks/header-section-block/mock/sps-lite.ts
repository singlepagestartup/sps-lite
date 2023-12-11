import { faker } from "@faker-js/faker";
import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";
import { IBackendComponentPageBlock } from "../interfaces/sps-lite";

export const entity: IBackendComponentPageBlock = {
  id: 9,
  variant: "simple-centered",
  __component: "page-blocks.header-section-block",
  title: faker.lorem.sentence(),
  className: faker.lorem.slug(),
  subtitle: faker.lorem.sentence(),
  anchor: "header-section-anchor",
  description: faker.lorem.paragraph(),
  media: [{ ...file }],
  additionalMedia: [{ ...file }],
};
