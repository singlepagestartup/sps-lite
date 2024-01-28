import { faker } from "@faker-js/faker";
import { entity as file } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/mock/sps-lite";
import { entity as button } from "../../../../../../../../contracts/src/lib/components/elements/button/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 1,
  __component: "elements.slide",
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  subtitle: null,
  media: [{ ...file }],
  buttons: [{ ...button }],
};
