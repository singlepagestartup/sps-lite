import { action as createEntity } from "./create";
import { service as deleteEntity } from "./delete";
import { service as updateEntity } from "./update";
import { service as seedEntities } from "./seed";
import { service as dumpEntities } from "./dump";

export const services = {
  create: createEntity,
  delete: deleteEntity,
  update: updateEntity,
  seed: seedEntities,
  dump: dumpEntities,
};
