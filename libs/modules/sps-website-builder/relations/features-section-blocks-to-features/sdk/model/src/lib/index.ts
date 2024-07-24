export {
  type ISelectSchema as IRelation,
  type IInsertSchema,
  insertSchema,
  selectSchema,
} from "@sps/sps-website-builder/relations/features-section-blocks-to-features/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route =
  "/api/sps-website-builder/features-section-blocks-to-features";
export const variants = ["default"] as const;
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
