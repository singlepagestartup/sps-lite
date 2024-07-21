export {
  type IInsertSchema,
  type ISelectSchema as IModel,
  insertSchema,
  selectSchema,
} from "@sps/sps-website-builder/models/feature/backend/schema/table";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/sps-website-builder/features";
export const host = BACKEND_URL;
export const variants = ["default"];
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
