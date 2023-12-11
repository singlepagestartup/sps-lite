import { entity as logotype } from "~redux/services/backend/components/elements/logotype/mock/sps-lite";
import { entity as spsLiteEntity } from "./sps-lite";
import { IBackendComponentPageBlock } from "../interfaces/sps";

export const entity: IBackendComponentPageBlock = {
  ...spsLiteEntity,
  variant: "split",
  logotype: logotype,
};
