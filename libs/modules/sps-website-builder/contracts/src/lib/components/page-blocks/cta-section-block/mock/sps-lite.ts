import { faker } from "@faker-js/faker";
import { entity as spsLiteBackendButton } from "../../../../../../../../contracts/src/lib/components/elements/button/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/mock/sps-lite";
import type { IComponent } from "../../../../../../../../contracts/src/lib/components/page-blocks/cta-section-block/interfaces/sps-lite";

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
