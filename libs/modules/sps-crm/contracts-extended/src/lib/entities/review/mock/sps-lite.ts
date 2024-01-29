import { faker } from "@faker-js/faker";
import type { IEntity } from "../interfaces/sps-lite";
// import { entity as file } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/mock/sps-lite";

export const entity: IEntity = {
  id: 5,
  name: faker.person.fullName(),
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  subtitle: faker.lorem.sentence(),
  rating: 5,
  media: null,
  additionalMedia: null,
  createdAt: "2023-02-14T08:49:14.623Z",
  updatedAt: "2023-02-14T08:49:53.551Z",
  publishedAt: "2023-02-14T22:48:50.378Z",
};
