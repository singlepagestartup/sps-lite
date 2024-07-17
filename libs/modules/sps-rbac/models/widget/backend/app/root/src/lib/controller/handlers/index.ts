import { handler as updateHander } from "./update";
import { handler as deleteHander } from "./delete";

export const handlers = {
  update: updateHander,
  delete: deleteHander,
};
