import { populate as logotypePopulate } from "~redux/services/backend/components/elements/logotype/populate";
import { populate as parentPopulate } from "./sps-lite";

export const populate = {
  ...parentPopulate,
  logotype: { populate: logotypePopulate },
};
