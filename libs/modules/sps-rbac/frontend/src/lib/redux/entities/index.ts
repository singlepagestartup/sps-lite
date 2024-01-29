import { api as roleApi } from "./role";
import { api as userApi } from "./user";

export const entities = {
  role: roleApi,
  user: userApi,
};
