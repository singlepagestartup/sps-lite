import { service as createEntity } from "./create";
import { service as deleteEntity } from "./delete";
import { service as findEntity } from "./find";
import { service as findByIdEntity } from "./find-by-id";
import { service as updateEntity } from "./update";

export const services = {
  create: createEntity,
  delete: deleteEntity,
  find: findEntity,
  findById: findByIdEntity,
  update: updateEntity,
};
