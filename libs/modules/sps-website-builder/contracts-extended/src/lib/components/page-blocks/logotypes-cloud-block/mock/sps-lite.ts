import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/logotypes-cloud-block/mock/sps-lite";
import { entity as logotype } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/mock/sps-lite";
import { entity as button } from "@sps/sps-website-builder-contracts/lib/components/elements/button/mock/sps-lite";
import type { IComponent } from "../interfaces";

export const entity: IComponent = {
  ...parentEntity,
  logotypes: Array(5).fill(logotype),
  buttons: [button],
};
