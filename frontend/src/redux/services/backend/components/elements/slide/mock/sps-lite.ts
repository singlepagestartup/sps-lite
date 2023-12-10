import { faker } from "@faker-js/faker";
import { ISpsLiteBackendSlide } from "../interfaces/sps-lite";
import { entity as file } from "~redux/services/backend/models/upload/mock/sps-lite";
import { entity as button } from "~redux/services/backend/components/elements/button/mock/sps-lite";

export const entity: ISpsLiteBackendSlide = {
  id: 1,
  __component: "elements.slide",
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  subtitle: null,
  media: [{ ...file }],
  buttons: [{ ...button }],
};
