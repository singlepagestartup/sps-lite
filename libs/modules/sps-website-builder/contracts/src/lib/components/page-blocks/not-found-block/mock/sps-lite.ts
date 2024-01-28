import { faker } from "@faker-js/faker";
import { entity as button } from "../../../../../../../../contracts/src/lib/components/elements/button/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/mock/sps-lite";
import type { IComponent } from "../../../../../../../../contracts/src/lib/components/page-blocks/not-found-block/interfaces/sps-lite";

export const entity: IComponent = {
  id: 3,
  __component: "page-blocks.not-found-block",
  variant: "simple",
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  className: null,
  description: faker.lorem.paragraph(),
  buttons: Array(1).fill({ ...button }),
  media: [{ ...file }],
  additionalMedia: [{ ...file }],
  anchor: null,
};
