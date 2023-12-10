import { faker } from "@faker-js/faker";
import { ISpsLiteBackendFeature } from "../interfaces/sps-lite";
import { entity as file } from "~redux/services/backend/models/upload/mock/sps-lite";

export const entity: ISpsLiteBackendFeature = {
  id: 136,
  __component: "elements.feature",
  title: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  subtitle: faker.lorem.sentences(1),
  media: [{ ...file }],
};
