import { relations } from "drizzle-orm";
import { schema as parentSchema } from "@sps/sps-website-builder-models-layout-backend-schema-plain";
import { relations as moduleRelations } from "@sps/sps-website-builder-backend-schema-relations";

export const schema = relations(parentSchema, (helpers) => {
  return {
    pagesToLayouts: helpers.many(moduleRelations.pagesToLayouts),
  };
});
