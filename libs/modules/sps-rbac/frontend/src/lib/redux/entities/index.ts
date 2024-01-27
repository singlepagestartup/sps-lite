import { api as roleApi } from "./role/api";
import { api as userApi } from "./user/api";

export const entities = {
  role: roleApi,
  user: userApi,
};
