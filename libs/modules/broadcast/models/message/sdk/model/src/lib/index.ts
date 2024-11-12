export {
  type ISelectSchema as IModel,
  type IInsertSchema,
  insertSchema,
  selectSchema,
} from "@sps/broadcast/models/message/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const tag = "message";
export const route = "/api/broadcast/messages";
export const variants = ["default"] as const;
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
} as NextRequestOptions;
