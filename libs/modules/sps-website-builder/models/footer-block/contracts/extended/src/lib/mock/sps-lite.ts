import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-footer-block-contracts";
import { spsLiteEntity as buttonsArray } from "@sps/sps-website-builder-models-buttons-array-contracts";
import { spsLiteEntity as logotype } from "@sps/sps-website-builder-models-logotype-contracts";

import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
  buttonsArrays: [buttonsArray, buttonsArray],
  additionalButtonsArrays: [buttonsArray],
  extraButtonsArrays: [buttonsArray, buttonsArray],
};
