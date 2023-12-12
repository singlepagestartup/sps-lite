import { faker } from "@faker-js/faker";
import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";
import { entity as button } from "~redux/services/backend/components/elements/button/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 1,
  __component: "elements.slide",
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  subtitle: null,
  media: [{ ...file }],
  buttons: [{ ...button }],
};
