import { service as createEntity } from "./create";
import { service as deleteEntity } from "./delete";
import { service as findEntity } from "./find";
import { service as findByIdEntity } from "./find-by-id";
import { service as updateEntity } from "./update";
import { service as getFilledPagesEntities } from "./get-filled-pages";
import { service as getModelPagesEntity } from "./get-model-pages";

export const services = {
  create: createEntity,
  delete: deleteEntity,
  find: findEntity,
  findById: findByIdEntity,
  update: updateEntity,
  getFilledPages: getFilledPagesEntities,
  getModelPages: getModelPagesEntity,
};
