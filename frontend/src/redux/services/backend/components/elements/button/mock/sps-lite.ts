import { faker } from "@faker-js/faker";
import { ISpsLiteBackendComponentButton } from "../interfaces/sps-lite";

export const entity: ISpsLiteBackendComponentButton = {
  id: 4,
  title: faker.lorem.words(3),
  url: "https://nextjs.com",
  variant: "secondary",
  __component: "elements.button",
  description: null,
  className: null,
  additionalAttributes: null,
  flyout: null,
};
