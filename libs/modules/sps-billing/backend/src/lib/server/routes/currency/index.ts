/**
 * currency router
 */
import schema from "../../content-types/currency/schema.json";

const route = schema.info.pluralName;
const model = schema.info.singularName;

const routes = [
  {
    method: "GET",
    path: `/${route}`,
    handler: `${model}.find`,
  },
  {
    method: "GET",
    path: `/${route}/:id`,
    handler: `${model}.findOne`,
  },
  {
    method: "POST",
    path: `/${route}`,
    handler: `${model}.create`,
  },
  {
    method: "PUT",
    path: `/${route}/:id`,
    handler: `${model}.update`,
  },
  {
    method: "DELETE",
    path: `/${route}/:id`,
    handler: `${model}.delete`,
  },
];

export default { type: "content-api", routes };
