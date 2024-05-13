import { relation as navbars } from "@sps/sps-website-builder-models-layout-backend-schema-relations-navbars";
import { relation as footers } from "@sps/sps-website-builder-models-layout-backend-schema-relations-footers";
import { relation as pages } from "@sps/sps-website-builder-models-layout-backend-schema-relations-pages";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-layout-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...navbars(helpers), ...footers(helpers), ...pages(helpers) };
});
