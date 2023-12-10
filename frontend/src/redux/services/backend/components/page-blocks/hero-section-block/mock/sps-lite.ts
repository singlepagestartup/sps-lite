import { faker } from "@faker-js/faker";
import { ISpsLiteBackendHeroSectionBlock } from "../interfaces/sps-lite";
import { entity as button } from "~redux/services/backend/components/elements/button/mock/sps-lite";
import { entity as file } from "~redux/services/backend/models/upload/mock/sps-lite";

export const entity: ISpsLiteBackendHeroSectionBlock = {
  id: 4,
  variant: "simple-centered",
  className: faker.lorem.slug(),
  anchor: faker.lorem.slug(),
  title: faker.lorem.words(10),
  description: faker.lorem.paragraphs(2),
  buttons: [{ ...button }],
  __component: "page-blocks.hero-section-block",
  media: [{ ...file }],
  additionalMedia: [{ ...file }],
};
