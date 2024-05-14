import { relation as features } from "@sps/sps-website-builder-models-features-section-block-backend-schema-relations-features";
import { relation as widgets } from "@sps/sps-website-builder-models-features-section-block-backend-schema-relations-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-features-section-block-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...features(helpers), ...widgets(helpers) };
});
