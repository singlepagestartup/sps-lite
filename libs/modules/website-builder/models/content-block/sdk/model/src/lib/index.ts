export {
  type ISelectSchema as IModel,
  type IInsertSchema,
  insertSchema,
  selectSchema,
} from "@sps/website-builder/models/content-block/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const variants = ["default"] as const;
export const route = "/api/website-builder/content-blocks";
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
