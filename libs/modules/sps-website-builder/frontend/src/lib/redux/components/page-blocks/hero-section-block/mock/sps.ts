import { entity as logotype } from "../../../elements/logotype/mock/sps-lite";
import { entity as spsLiteEntity } from "./sps-lite";
import type { IComponent } from "../interfaces/sps";

export const entity: IComponent = {
  ...spsLiteEntity,
  variant: "split",
  logotype: logotype,
};
