export {
  type IInsertSchema,
  type ISelectSchema as IModel,
  insertSchema,
  selectSchema,
} from "@sps/ecommerce/models/widget/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/ecommerce/widgets";
export const variants = [
  "default",
  "orders-list-default",
  "products-list-default",
  "product-overview-default",
  "categories-list-default",
  "category-overview-default",
  "stores-list-default",
];
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
