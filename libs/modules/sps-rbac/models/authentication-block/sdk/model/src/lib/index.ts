export {
  type IInsertSchema,
  type ISelectSchema as IModel,
  insertSchema,
  selectSchema,
} from "@sps/sps-rbac/models/authentication-block/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/sps-rbac/authentication-blocks";
export const host = BACKEND_URL;
export const variants = [
  "default",
  "change-password",
  "forgot-password",
  "login",
  "logout",
  "registration",
  "reset-password",
];
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
