import { faker } from "@faker-js/faker";
import { entity as spsLiteBackendFeature } from "~redux/services/backend/components/elements/feature/mock/sps-lite";
import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 32,
  title: faker.lorem.sentence(),
  variant: "with-icon",
  className: null,
  subtitle: faker.lorem.sentence(),
  anchor: faker.lorem.slug(),
  description: faker.lorem.paragraph(),
  __component: "page-blocks.features-section-block",
  features: Array(4).fill({ ...spsLiteBackendFeature }),
  media: [{ ...file }],
  additionalMedia: [{ ...file }],
};
