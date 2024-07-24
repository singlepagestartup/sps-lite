export {
  type IInsertSchema,
  type ISelectSchema as IRelation,
  insertSchema,
  selectSchema,
} from "@sps/sps-host/relations/widgets-to-external-modules/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/sps-host/widgets-to-external-modules";
export const variants = ["default"];
export const externalModules = ["sps-website-builder", "startup"];
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
