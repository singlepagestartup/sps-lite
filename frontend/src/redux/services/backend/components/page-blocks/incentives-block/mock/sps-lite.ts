import { faker } from "@faker-js/faker";
import { entity as feature } from "~redux/services/backend/components/elements/feature/mock/sps-lite";
import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 9,
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  subtitle: null,
  className: null,
  anchor: faker.lorem.slug(),
  __component: "page-blocks.incentives-block",
  variant: "four-column-with-illustrations",
  features: Array(4).fill({ ...feature }),
  media: [{ ...file }],
  additionalMedia: [{ ...file }],
};
