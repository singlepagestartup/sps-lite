import { faker } from "@faker-js/faker";
import { ISpsLiteBackendCtaSectionBlock } from "../interfaces/sps-lite";
import { entity as spsLiteBackendButton } from "~redux/services/backend/components/elements/button/mock/sps-lite";
import { entity as file } from "~redux/services/backend/models/upload/mock/sps-lite";

export const entity: ISpsLiteBackendCtaSectionBlock = {
  id: 3,
  title: faker.lorem.sentence(),
  variant: "dark-with-image",
  className: faker.lorem.slug(),
  subtitle: "Subtitle",
  anchor: faker.lorem.slug(),
  __component: "page-blocks.cta-section-block",
  description: faker.lorem.paragraph(),
  buttons: Array(3).fill({ ...spsLiteBackendButton }),
  media: [{ ...file }],
  additionalMedia: [{ ...file }],
};
