export {
  type ISelectSchema as IModel,
  type IInsertSchema,
  insertSchema,
  selectSchema,
} from "@sps/sps-website-builder/models/logotype/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/sps-website-builder/logotypes";
export const host = BACKEND_URL;
export const variants = ["default"] as const;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
