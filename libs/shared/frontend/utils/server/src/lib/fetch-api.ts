import { actions } from "./actions";

export const api = {
  findOne: actions.findById,
  find: actions.find,
  create: actions.create,
  findById: actions.findById,
};
