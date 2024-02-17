import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/footer-block/mock/sps-lite";
import { spsLiteEntity as buttonsArray } from "@sps/sps-website-builder-buttons-array-contracts";
import { entity as logotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/mock/sps-lite";

import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
  buttonsArrays: [buttonsArray, buttonsArray],
  additionalButtonsArrays: [buttonsArray],
  extraButtonsArrays: [buttonsArray, buttonsArray],
};
