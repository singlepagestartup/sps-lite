import { faker } from "@faker-js/faker";
import { entity as faq } from "~redux/services/backend/components/elements/faq/mock/sps-lite";
import { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 2,
  title: faker.lorem.sentence(),
  anchor: "faq-anchor",
  className: faker.lorem.slug(),
  subtitle: faker.lorem.sentence(),
  variant: "two-columns-with-centered-introduction",
  __component: "page-blocks.faqs-block",
  description: faker.lorem.paragraph(),
  faqs: Array(4).fill({ ...faq }),
};
