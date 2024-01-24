import { entity as logotype } from "~redux/services/backend/components/elements/logotype/mock/sps-lite";
import { entity as spsLiteEntity } from "./sps-lite";
import { IComponent } from "../interfaces/sps";

export const entity: IComponent = {
  ...spsLiteEntity,
  variant: "split",
  logotype: logotype,
};
