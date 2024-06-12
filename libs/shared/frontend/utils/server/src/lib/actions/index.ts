import { action as findById } from "./find-by-id";
import { action as create } from "./create";
import { action as remove } from "./delete";
import { action as find } from "./find";
import { action as update } from "./update";

export const actions = {
  findById,
  create,
  delete: remove,
  find,
  update,
};
