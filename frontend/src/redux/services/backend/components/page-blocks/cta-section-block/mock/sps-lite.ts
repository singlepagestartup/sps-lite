import { faker } from "@faker-js/faker";
import { entity as spsLiteBackendButton } from "~redux/services/backend/components/elements/button/mock/sps-lite";
import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
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
