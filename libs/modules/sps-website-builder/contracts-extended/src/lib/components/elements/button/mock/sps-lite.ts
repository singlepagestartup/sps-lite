import type { IComponent } from "../interfaces";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/elements/button/mock/sps-lite";

export const entity: IComponent = {
  ...parentEntity,
  flyout: null,
};
