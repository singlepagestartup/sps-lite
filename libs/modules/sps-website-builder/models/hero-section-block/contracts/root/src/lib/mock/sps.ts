import { entity as spsLiteEntity } from "./sps-lite";
import type { IModel } from "../interfaces/sps";

export const entity: IModel = {
  ...spsLiteEntity,
  variant: "split",
};
