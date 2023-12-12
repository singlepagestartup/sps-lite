import { faker } from "@faker-js/faker";
import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 136,
  __component: "elements.feature",
  title: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  subtitle: faker.lorem.sentences(1),
  media: [{ ...file }],
};
