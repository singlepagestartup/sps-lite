import { service as createEntity } from "./create";
import { service as deleteEntity } from "./delete";
import { service as findEntities } from "./find";
import { service as findByIdEntity } from "./find-by-id";
import { service as updateEntity } from "./update";
import { service as seedEntities } from "./seed";
import { service as dumpEntities } from "./dump";
import { service as withUrls } from "./with-urls";
import { service as findByUrl } from "./find-by-url";
import { service as urls } from "./urls";
import { service as urlSegmentValue } from "./url-segment-value";

export const services = {
  create: createEntity,
  delete: deleteEntity,
  find: findEntities,
  findById: findByIdEntity,
  update: updateEntity,
  seed: seedEntities,
  dump: dumpEntities,
  withUrls,
  findByUrl,
  urls,
  urlSegmentValue,
};
