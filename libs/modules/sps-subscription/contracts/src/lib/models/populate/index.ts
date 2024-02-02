import { populate as spsLitePopulate } from "./sps-lite";
import { populate as startupPopulate } from "./startup";

export const populate = {
  ...spsLitePopulate,
  ...startupPopulate,
};
