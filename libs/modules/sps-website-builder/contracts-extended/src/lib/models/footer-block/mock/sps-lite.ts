import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/footer-block/mock/sps-lite";
import { entity as buttonsArray } from "@sps/sps-elements-contracts/lib/models/buttons-array/mock/sps-lite";
import { entity as logotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/mock/sps-lite";

import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
  buttonsArrays: [buttonsArray, buttonsArray],
  additionalButtonsArrays: [buttonsArray],
  extraButtonsArrays: [buttonsArray, buttonsArray],
};
