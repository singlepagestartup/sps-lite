import { faker } from "@faker-js/faker";
import { entity as button } from "~redux/services/backend/components/elements/button/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 1,
  __component: "page-blocks.alert-block",
  title: faker.lorem.sentence(),
  subtitle: null,
  description: faker.lorem.paragraph(),
  className: faker.lorem.slug(),
  anchor: faker.lorem.slug(),
  variant: "centered",
  buttons: [{ ...button }],
  media: [
    {
      id: 52,
      name: "Approved.png",
      alternativeText: null,
      caption: null,
      width: 960,
      height: 960,
      hash: "Approved_6d5a366648",
      ext: ".png",
      mime: "image/png",
      size: 381.88,
      url: "https://721511.selcdn.ru/sps-storybook/Approved.png",
      previewUrl: null,
      provider: "aws-s3",
      providerMetadata: null,
      createdAt: "2023-06-20T18:36:29.451Z",
      updatedAt: "2023-06-20T18:36:29.451Z",
    },
  ],
  additionalMedia: null,
};
