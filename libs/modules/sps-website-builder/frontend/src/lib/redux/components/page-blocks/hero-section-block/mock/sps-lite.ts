import { faker } from "@faker-js/faker";
import { entity as button } from "../../../elements/button/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
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
