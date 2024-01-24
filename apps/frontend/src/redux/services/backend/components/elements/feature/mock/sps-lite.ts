import { faker } from "@faker-js/faker";
import { entity as file } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 136,
  __component: "elements.feature",
  title: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  subtitle: faker.lorem.sentences(1),
  media: [{ ...file }],
};
