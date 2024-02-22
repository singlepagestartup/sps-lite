import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-layout-contracts";

export const entity: IModel = {
  ...parentEntity,
  sidebar: null,
  topbar: null,
  footer: null,
  navbar: null,
};
