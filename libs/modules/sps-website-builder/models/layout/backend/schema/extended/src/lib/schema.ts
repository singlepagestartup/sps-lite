import { relations } from "drizzle-orm";
import { schema as parentSchema } from "@sps/sps-website-builder-models-layout-backend-schema-plain";
import { schema as spsWebsiteBuilder } from "@sps/sps-website-builder-backend-schema-extended";

export const schema = relations(parentSchema, (helpers) => {
  return {
    pagesToLayouts: helpers.many(spsWebsiteBuilder.pagesToLayouts),
  };
});
