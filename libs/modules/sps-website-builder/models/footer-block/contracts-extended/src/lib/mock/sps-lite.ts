import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-footer-block-contracts";
import { spsLiteEntity as buttonsArray } from "@sps/sps-website-builder-buttons-array-contracts";
import { spsLiteEntity as logotype } from "@sps/sps-website-builder-logotype-contracts";

import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
  buttonsArrays: [buttonsArray, buttonsArray],
  additionalButtonsArrays: [buttonsArray],
  extraButtonsArrays: [buttonsArray, buttonsArray],
};
