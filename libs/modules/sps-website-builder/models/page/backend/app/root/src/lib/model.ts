import { db, schema } from "@sps/sps-db-provider";

const schemaModel = schema.SpsWebsiteBuilderPage;

const query = db.query.SpsWebsiteBuilderPage;

const insert = (params) => {
  return db.insert(schemaModel).values(params);
};

const select = (params) => {
  return db.select(params).from(schemaModel);
};

const update = (params) => {
  return db.update(schemaModel).set(params);
};

const del = () => {
  return db.delete(schemaModel);
};

export const model = {
  query,
  insert,
  select,
  delete: del,
  update,
  schema: schemaModel,
};
