import { relations } from "drizzle-orm";
import { schema as parentSchema } from "@sps/sps-website-builder-models-page-backend-schema-plain";

export const schema = relations(parentSchema, (helpers) => {
  return {};
});
