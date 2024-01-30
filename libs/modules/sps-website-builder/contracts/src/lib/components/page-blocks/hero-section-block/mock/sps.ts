import { entity as spsLiteEntity } from "./sps-lite";
import type { IComponent } from "../interfaces/sps";

export const entity: IComponent = {
  ...spsLiteEntity,
  variant: "split",
};
