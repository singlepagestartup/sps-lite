import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/footer-block/mock/sps-lite";
import { entity as buttonsArray } from "@sps/sps-website-builder-contracts/lib/components/elements/buttons-array/mock/sps-lite";
import { entity as logotype } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/mock/sps-lite";

import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  ...parentEntity,
  logotype: logotype,
  buttonsArrays: [buttonsArray, buttonsArray],
  additionalButtonsArrays: [buttonsArray],
  extraButtonsArrays: [buttonsArray, buttonsArray],
};
