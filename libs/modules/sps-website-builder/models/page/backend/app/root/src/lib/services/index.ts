import { service as getFilledPagesEntities } from "./get-filled-pages";
import { service as getModelPagesEntity } from "./get-model-pages";

/**
 * For preventing circular dependencies, we are using this index file to export the services.
 */
export const services = {
  getFilledPages: getFilledPagesEntities,
  getModelPages: getModelPagesEntity,
};
