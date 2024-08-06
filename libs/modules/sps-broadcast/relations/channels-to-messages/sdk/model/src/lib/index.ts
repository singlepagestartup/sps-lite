export {
  type ISelectSchema as IModel,
  type IInsertSchema,
  insertSchema,
  selectSchema,
} from "@sps/sps-broadcast/relations/channels-to-messages/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const tag = "channels-to-messages";
export const route = "/api/sps-broadcast/channels-to-messages";
export const variants = ["default"] as const;
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
