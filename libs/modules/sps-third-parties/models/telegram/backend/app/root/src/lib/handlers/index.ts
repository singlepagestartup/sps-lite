import { handler as findHander } from "./find";
import { handler as findByIdHander } from "./find-by-id";
import { handler as createHander } from "./create";
import { handler as updateHander } from "./update";
import { handler as deleteHander } from "./delete";
import { handler as launchHander } from "./launch";
import { handler as stopHander } from "./stop";
import { handler as webhookHander } from "./webhook";
import { handler as sendMessageHander } from "./send-message";

export const handlers = {
  find: findHander,
  findById: findByIdHander,
  create: createHander,
  update: updateHander,
  delete: deleteHander,
  launch: launchHander,
  webhook: webhookHander,
  stop: stopHander,
  sendMessage: sendMessageHander,
};
