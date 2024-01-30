import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/hero-section-block/mock/sps";
import { entity as logotype } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/mock/sps-lite";
import type { IComponent } from "../interfaces/sps";

export const entity: IComponent = {
  ...parentEntity,
  logotype: logotype,
};
