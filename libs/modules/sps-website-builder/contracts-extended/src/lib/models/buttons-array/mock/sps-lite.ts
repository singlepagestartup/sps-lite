import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/buttons-array/mock/sps-lite";
import { entity as buttonEntity } from "@sps/sps-website-builder-contracts/lib/models/button/mock/sps-lite";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  buttons: [buttonEntity, buttonEntity],
};
