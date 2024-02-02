import type { IModel } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/layout/mock/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  sidebar: null,
  topbar: null,
  footer: null,
  navbar: null,
};
