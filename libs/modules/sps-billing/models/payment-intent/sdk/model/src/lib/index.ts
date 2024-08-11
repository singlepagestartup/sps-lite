export {
  type IInsertSchema,
  type ISelectSchema as IModel,
  insertSchema,
  selectSchema,
} from "@sps/sps-billing/models/payment-intent/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/sps-billing/payment-intents";
export const variants = ["default"];
export const statuses = [
  "canceled",
  "processing",
  "requires_action",
  "requires_capture",
  "requires_confirmation",
  "requires_payment_method",
  "succeeded",
];
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
