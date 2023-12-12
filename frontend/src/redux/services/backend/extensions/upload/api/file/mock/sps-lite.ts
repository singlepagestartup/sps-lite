import { faker } from "@faker-js/faker";
import { IEntity } from "../interfaces/sps-lite";

export const entity: IEntity = {
  id: 907,
  name: faker.lorem.slug(),
  alternativeText: null,
  caption: null,
  width: 1360,
  height: 1536,
  hash: faker.lorem.slug(),
  ext: ".webp",
  mime: "image/webp",
  size: 129.77,
  url: faker.image.urlPicsumPhotos({
    blur: 10,
  }),
  previewUrl: null,
  provider: "aws-s3",
  providerMetadata: null,
  createdAt: "2023-04-01T20:54:54.396Z",
  updatedAt: "2023-04-01T20:54:54.396Z",
};
