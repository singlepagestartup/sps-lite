import { actions } from "./actions";

/**
 * @deprecated Use `@sps/shared-frontend-server-api` instead of that function
 */
export const api = {
  findOne: actions.findById,
  find: actions.find,
  create: actions.create,
  findById: actions.findById,
};
