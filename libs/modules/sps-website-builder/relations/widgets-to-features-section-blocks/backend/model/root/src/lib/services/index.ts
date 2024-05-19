import { service as createEntity } from "./create";
import { service as deleteEntity } from "./delete";
import { service as findEntities } from "./find";
import { service as findByIdEntity } from "./find-by-id";
import { service as updateEntity } from "./update";
import { service as seedEntities } from "./seed";
import { service as dumpEntities } from "./dump";

export const services = {
  create: createEntity,
  delete: deleteEntity,
  find: findEntities,
  findById: findByIdEntity,
  update: updateEntity,
  seed: seedEntities,
  dump: dumpEntities,
};
