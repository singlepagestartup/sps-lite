import { handler as findHander } from "./find";
import { handler as findByIdHander } from "./find-by-id";
import { handler as createHander } from "./create";
import { handler as updateHander } from "./update";
import { handler as deleteHander } from "./delete";
import { handler as findByUrlHander } from "./find-by-url";
import { handler as urlsHander } from "./urls";
import { handler as urlSegmentValueHander } from "./url-segment-value";

export const handlers = {
  find: findHander,
  findById: findByIdHander,
  create: createHander,
  update: updateHander,
  delete: deleteHander,
  findByUrl: findByUrlHander,
  urls: urlsHander,
  urlSegmentValue: urlSegmentValueHander,
};
