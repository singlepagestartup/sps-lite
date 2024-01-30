import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/elements/buttons-array/mock/sps-lite";
import { entity as buttonEntity } from "@sps/sps-website-builder-contracts/lib/components/elements/button/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  ...parentEntity,
  buttons: [buttonEntity, buttonEntity],
};
