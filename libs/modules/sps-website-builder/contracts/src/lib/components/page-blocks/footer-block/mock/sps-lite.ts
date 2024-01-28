import { faker } from "@faker-js/faker";
import { entity as logotype } from "../../../../../../../../contracts/src/lib/components/elements/logotype/mock/sps-lite";
import { entity as buttonsArray } from "../../../../../../../../contracts/src/lib/components/elements/buttons-array/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  id: 2,
  __component: "page-blocks.footer-block",
  variant: "four-columns-with-company-mission",
  className: faker.lorem.slug(),
  logotype: { ...logotype },
  copyrights: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  buttonsArrays: [{ ...buttonsArray }, { ...buttonsArray }],
  additionalButtonsArrays: [{ ...buttonsArray }],
  extraButtonsArrays: [{ ...buttonsArray }, { ...buttonsArray }],
};
