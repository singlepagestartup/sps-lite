// import { db, schema } from "@sps/sps-db-provider";
import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import * as model from "@sps/sps-website-builder-models-page-backend-schema";

export const db = drizzle(postgres, { schema });
export const Table = schema.PageTable;
export const Relations = schema.PageRelations;
export const populate = model.populate;
export const transformData = model.transformData;

// const schemaModel = schema;

// const query = db.query.SpsWebsiteBuilderPage;

// const insert = (params) => {
//   return db.insert(schemaModel).values(params);
// };

// const select = (params?: any) => {
//   return db.select(params).from(schemaModel);
// };

// const update = (params) => {
//   return db.update(schemaModel).set(params);
// };

// const del = () => {
//   return db.delete(schemaModel);
// };

// export const model = {
//   query,
//   insert,
//   select,
//   delete: del,
//   update,
//   schema: schemaModel,
// };
