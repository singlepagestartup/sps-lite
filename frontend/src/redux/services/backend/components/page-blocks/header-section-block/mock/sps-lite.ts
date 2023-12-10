import { faker } from "@faker-js/faker";
import { ISpsLiteBackendHeaderSectionBlock } from "../interfaces/sps-lite";
import { entity as file } from "~redux/services/backend/models/upload/mock/sps-lite";

export const entity: ISpsLiteBackendHeaderSectionBlock = {
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
