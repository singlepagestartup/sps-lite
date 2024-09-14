export {
  type IInsertSchema,
  type ISelectSchema as IModel,
  insertSchema,
  selectSchema,
} from "@sps/ecommerce/models/attribute-key/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/ecommerce/attribute-keys";
export const variants = ["default"];
export const types = ["feature", "price", "interval"];
export const fields = ["string", "number", "boolean", "date", "datetime"];
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
