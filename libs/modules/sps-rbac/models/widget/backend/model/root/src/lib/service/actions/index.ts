import { service as seedEntities } from "./seed";
import { service as dumpEntities } from "./dump";

export const services = {
  seed: seedEntities,
  dump: dumpEntities,
};
