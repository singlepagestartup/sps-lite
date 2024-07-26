export {
  type IInsertSchema,
  type ISelectSchema as IRelation,
  insertSchema,
  selectSchema,
} from "@sps/sps-host/relations/layouts-to-widgets/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/sps-host/layouts-to-widgets";
export const variants = ["default", "primary"];
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
