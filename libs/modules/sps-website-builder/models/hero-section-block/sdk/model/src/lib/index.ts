export {
  type ISelectSchema as IModel,
  type IInsertSchema,
  insertSchema,
  selectSchema,
} from "@sps/sps-website-builder/models/hero-section-block/backend/schema/table";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const variants = ["default"] as const;
export const route = "/api/sps-website-builder/hero-section-blocks";
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
