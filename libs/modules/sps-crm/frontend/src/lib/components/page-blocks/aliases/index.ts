import { pageBlockComponents as spsLitePageBlockComponents } from "./sps-lite";
import { pageBlockComponents as startupPageBlockComponents } from "./startup";
// import { pageBlockComponents as spsCrmPageBlockComponents } from "@sps/sps-crm-frontend";

export const pageBlockComponents = {
  ...spsLitePageBlockComponents,
  ...startupPageBlockComponents,
};
