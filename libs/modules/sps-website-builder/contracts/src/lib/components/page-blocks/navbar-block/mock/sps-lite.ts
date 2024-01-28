import { faker } from "@faker-js/faker";
import { entity as logotype } from "../../../../../../../../contracts/src/lib/components/elements/logotype/mock/sps-lite";
import { entity as button } from "../../../../../../../../contracts/src/lib/components/elements/button/mock/sps-lite";
import type { IComponent } from "../../../../../../../../contracts/src/lib/components/page-blocks/navbar-block/interfaces/sps-lite";

export const entity: IComponent = {
  id: 2,
  __component: "page-blocks.navbar-block",
  variant: "simple-links-on-left",
  description: faker.lorem.paragraph(),
  className: faker.lorem.slug(),
  logotype: { ...logotype },
  buttons: [{ ...button }, { ...button }],
  additionalButtons: [{ ...button }],
  extraButtons: [{ ...button }],
};
