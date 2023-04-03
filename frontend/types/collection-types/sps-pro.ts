import { ISpsLiteBackendTier } from "./sps-lite";

export interface ISpsProBackendTier extends Omit<ISpsLiteBackendTier, `type`> {
  type: ISpsLiteBackendTier[`type`] | `pro`;
}
