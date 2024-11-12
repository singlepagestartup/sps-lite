export {
  type IInsertSchema,
  type ISelectSchema as IModel,
  insertSchema,
  selectSchema,
} from "@sps/host/models/page/backend/repository/database";
import { BACKEND_URL, NextRequestOptions, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/host/pages";
export const variants = ["default"];
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
    cache: "no-store",
  },
} as NextRequestOptions;
