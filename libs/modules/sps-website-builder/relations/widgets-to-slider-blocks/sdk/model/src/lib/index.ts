export {
  type ISelectSchema as IRelation,
  type IInsertSchema,
  insertSchema,
  selectSchema,
} from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/backend/schema/root";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export const tag = "widgets-to-slider-blocks";
export const route = "/api/sps-website-builder/widgets-to-slider-blocks";
export const variants = ["default"] as const;
export const host = BACKEND_URL;
export const query = {};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
