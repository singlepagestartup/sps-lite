import { handler as findHander } from "./find";
import { handler as findByIdHander } from "./find-by-id";
import { handler as createHander } from "./create";
import { handler as updateHander } from "./update";
import { handler as deleteHander } from "./delete";
import { handler as pushMessageHandler } from "./push-message";

export const handlers = {
  find: findHander,
  findById: findByIdHander,
  create: createHander,
  update: updateHander,
  delete: deleteHander,
  pushMessage: pushMessageHandler,
};
