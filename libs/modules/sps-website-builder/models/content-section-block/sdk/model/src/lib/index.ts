export {
  type ISelectSchema as IModel,
  type IInsertSchema,
  insertSchema,
  selectSchema,
} from "@sps/sps-website-builder/models/content-section-block/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const variants = ["default"] as const;
export const route = "/api/sps-website-builder/content-section-blocks";
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
