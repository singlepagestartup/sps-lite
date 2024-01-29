import type { IEntity } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/entities/layout/mock/sps-lite";

export const entity: IEntity = {
  ...parentEntity,
  sidebar: null,
  topbar: null,
  footer: null,
  navbar: null,
};
