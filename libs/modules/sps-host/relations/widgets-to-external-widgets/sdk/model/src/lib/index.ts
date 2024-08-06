export {
  type IInsertSchema,
  type ISelectSchema as IModel,
  insertSchema,
  selectSchema,
} from "@sps/sps-host/relations/widgets-to-external-widgets/backend/repository/database";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const route = "/api/sps-host/widgets-to-external-widgets";
export const variants = ["default"];
export const externalModules = ["sps-website-builder", "sps-rbac", "startup"];
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
