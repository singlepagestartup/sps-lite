import { populate as logotypePopulate } from "~redux/services/backend/components/elements/logotype/populate";
import { populate as spsLitePopulate } from "./sps-lite";

export const populate = {
  ...spsLitePopulate,
  logotype: { populate: logotypePopulate },
};
